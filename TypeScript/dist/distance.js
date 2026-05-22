"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = distance;
function distance(first, second, third, fourth) {
    if (typeof first === "number" && typeof second === "number") {
        if (third === undefined || fourth === undefined) {
            throw new Error("Для координат нужно передать четыре числа.");
        }
        return Math.hypot(third - first, fourth - second);
    }
    if (typeof first !== "number" && typeof second !== "number") {
        return Math.hypot(second.x - first.x, second.y - first.y);
    }
    throw new Error("Некорректные аргументы функции distance.");
}
