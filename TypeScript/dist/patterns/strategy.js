"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.PercentDiscountStrategy = exports.NoDiscountStrategy = void 0;
class NoDiscountStrategy {
    calculate(price) {
        return price;
    }
}
exports.NoDiscountStrategy = NoDiscountStrategy;
class PercentDiscountStrategy {
    constructor(percent) {
        this.percent = percent;
    }
    calculate(price) {
        return price - (price * this.percent) / 100;
    }
}
exports.PercentDiscountStrategy = PercentDiscountStrategy;
class Order {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    getFinalPrice(price) {
        return this.strategy.calculate(price);
    }
}
exports.Order = Order;
