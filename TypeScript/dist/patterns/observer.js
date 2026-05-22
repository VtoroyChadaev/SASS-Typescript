"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsPublisher = exports.NewsChannel = void 0;
class NewsChannel {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} received news: ${data}`);
    }
}
exports.NewsChannel = NewsChannel;
class NewsPublisher {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    publish(news) {
        for (const observer of this.observers) {
            observer.update(news);
        }
    }
}
exports.NewsPublisher = NewsPublisher;
