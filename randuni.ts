import { randarr } from "./lib/randarr";
const rand = (shape: number[], f: number) =>
  randarr(shape[0], () => parseFloat(Math.random().toFixed(f)));
export const randuni = (shape: number[] = [1], f: number = 5) => {
  if (shape.length >= 3 || shape.length <= 0) return [];
  let arr: number[][] = [];
  if (shape[1]) {
    for (let i = 0; i < shape[1]; i++) {
      arr.push(rand(shape, f));
    }
  } else {
    arr = rand(shape, f);
  }
  return arr;
};
