export type Point = {
  x: number;
  y: number;
};

export function distance(x1: number, y1: number, x2: number, y2: number): number;
export function distance(p1: Point, p2: Point): number;
export function distance(
  first: number | Point,
  second: number | Point,
  third?: number,
  fourth?: number
): number {
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
