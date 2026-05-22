type Comparator<T> = (left: T, right: T) => number;

class TreeNode<T> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  public constructor(public value: T) {}
}

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;

  public constructor(private readonly compare: Comparator<T>) {}

  public insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  public search(value: T): T | null {
    let current: TreeNode<T> | null = this.root;

    while (current !== null) {
      const comparison: number = this.compare(value, current.value);

      if (comparison === 0) {
        return current.value;
      }

      current = comparison < 0 ? current.left : current.right;
    }

    return null;
  }

  public delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  public update(oldValue: T, newValue: T): boolean {
    if (this.search(oldValue) === null) {
      return false;
    }

    this.delete(oldValue);
    this.insert(newValue);
    return true;
  }

  public height(): number {
    return this.getHeight(this.root);
  }

  public toArray(): T[] {
    const result: T[] = [];
    this.inOrder(this.root, result);
    return result;
  }

  private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    const comparison: number = this.compare(value, node.value);

    if (comparison < 0) {
      node.left = this.insertNode(node.left, value);
    } else if (comparison > 0) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    const comparison: number = this.compare(value, node.value);

    if (comparison < 0) {
      node.left = this.deleteNode(node.left, value);
      return node;
    }

    if (comparison > 0) {
      node.right = this.deleteNode(node.right, value);
      return node;
    }

    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

    const minValue: T = this.findMin(node.right);
    node.value = minValue;
    node.right = this.deleteNode(node.right, minValue);
    return node;
  }

  private findMin(node: TreeNode<T>): T {
    let current: TreeNode<T> = node;

    while (current.left !== null) {
      current = current.left;
    }

    return current.value;
  }

  private getHeight(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  private inOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) {
      return;
    }

    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
  }
}
