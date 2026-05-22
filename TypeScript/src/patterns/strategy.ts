export interface DiscountStrategy {
  calculate(price: number): number;
}

export class NoDiscountStrategy implements DiscountStrategy {
  public calculate(price: number): number {
    return price;
  }
}

export class PercentDiscountStrategy implements DiscountStrategy {
  public constructor(private readonly percent: number) {}

  public calculate(price: number): number {
    return price - (price * this.percent) / 100;
  }
}

export class Order {
  public constructor(private strategy: DiscountStrategy) {}

  public setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  public getFinalPrice(price: number): number {
    return this.strategy.calculate(price);
  }
}
