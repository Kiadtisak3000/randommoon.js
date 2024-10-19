import { randarr } from "./lib/randarr";
import { Variable } from "./lib/var";
const rand = (length: number) => randarr(length, () => 0);
export const Zeros = (shape: number[] = [5]) => {
  let arr: number[][] = [];
  if (shape.length >= 3 || shape.length <= 0) return [];
  if (shape[1]) {
    for (let i = 0; i < shape[1]; i++) {
      arr.push(rand(shape[0]).data);
    }
  } else {
    arr = rand(shape[0]).data;
  }
  return new Variable(arr,"int");
};