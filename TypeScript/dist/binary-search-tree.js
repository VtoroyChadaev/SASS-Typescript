"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(compare) {
        this.compare = compare;
        this.root = null;
    }
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }
    search(value) {
        let current = this.root;
        while (current !== null) {
            const comparison = this.compare(value, current.value);
            if (comparison === 0) {
                return current.value;
            }
            current = comparison < 0 ? current.left : current.right;
        }
        return null;
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    update(oldValue, newValue) {
        if (this.search(oldValue) === null) {
            return false;
        }
        this.delete(oldValue);
        this.insert(newValue);
        return true;
    }
    height() {
        return this.getHeight(this.root);
    }
    toArray() {
        const result = [];
        this.inOrder(this.root, result);
        return result;
    }
    insertNode(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        const comparison = this.compare(value, node.value);
        if (comparison < 0) {
            node.left = this.insertNode(node.left, value);
        }
        else if (comparison > 0) {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }
    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        const comparison = this.compare(value, node.value);
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
        const minValue = this.findMin(node.right);
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
        return node;
    }
    findMin(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    inOrder(node, result) {
        if (node === null) {
            return;
        }
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
    }
}
exports.BinarySearchTree = BinarySearchTree;
