import { randarr } from "./lib/randarr";
import { Variable } from "./lib/var";
const rand = (length: number) => randarr(length, () => 0);

/**
 * Generates a Variable object containing an array of zeros with the specified shape.
 *
 * @param shape - An array representing the dimensions of the array. Default is [5].
 * @returns A Variable object containing the array of zeros.
 *
 * @example
 * // Generate a Variable with an array of 5 zeros.
 * const var1 = Zeros(); 
 * console.log(var1.data); // Output: [0, 0, 0, 0, 0]
 *
 * @example
 * // Generate a Variable with a 2D array of zeros (3 rows, 2 columns).
 * const var2 = Zeros([3, 2]); 
 * console.log(var2.data); // Output: [[0, 0], [0, 0], [0, 0]]
 */
export const Zeros = (shape: number[] = [5]) => {
  let arr: number[][] = [];
  if (shape.length >= 3 || shape.length <= 0) return new Variable([],"undefined");
  if (shape[1]) {
    for (let i = 0; i < shape[1]; i++) {
      arr.push(rand(shape[0]).data);
    }
  } else {
    arr = rand(shape[0]).data;
  }
  return new Variable(arr,"int");
};