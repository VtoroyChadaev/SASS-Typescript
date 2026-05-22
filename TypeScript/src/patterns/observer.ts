export interface Observer<T> {
  update(data: T): void;
}

export class NewsChannel implements Observer<string> {
  public constructor(private readonly name: string) {}

  public update(data: string): void {
    console.log(`${this.name} received news: ${data}`);
  }
}

export class NewsPublisher {
  private readonly observers: Observer<string>[] = [];

  public subscribe(observer: Observer<string>): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer<string>): void {
    const index: number = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public publish(news: string): void {
    for (const observer of this.observers) {
      observer.update(news);
    }
  }
}
