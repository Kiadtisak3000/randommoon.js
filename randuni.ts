import { randarr } from "./lib/randarr";
import { Variable } from "./lib/var";
const rand = (shape: number[], f: number) =>
  randarr(shape[0], () => parseFloat(Math.random().toFixed(f)));
/**
 * Generates a Variable object containing a random array of numbers with a uniform distribution.
 *
 * @param shape - An array representing the dimensions of the array. Default is [1].
 * @param f - The number of decimal places to keep in the generated numbers. Default is 5.
 * @returns A Variable object containing the random array.
 *
 * @example
 * // Generate a single random number with 5 decimal places.
 * const var1 = randuni(); 
 * console.log(var1.data); // Output: [0.12345]
 *
 * @example
 * // Generate an array of 10 random numbers with 2 decimal places.
 * const var2 = randuni([10], 2); 
 * console.log(var2.data); // Output: [0.12, 0.34, 0.56, ..., 0.98]
 *
 * @example
 * // Generate a 2D array with 3 rows and 4 columns of random numbers.
 * const var3 = randuni([3, 4]); 
 * console.log(var3.data); // Output: [[0.12345, 0.67890, ...], [0.34567, 0.89012, ...], ...] 
 */
export const randuni = (shape: number[] = [1], f: number = 5) => {
  if (shape.length >= 3 || shape.length <= 0) return new Variable([],"undefined");
  let arr: number[][] = [];
  if (shape[1]) {
    for (let i = 0; i < shape[1]; i++) {
      arr.push(rand(shape, f).data);
    }
  } else {
    arr = rand(shape, f).data;
  }
  return new Variable(arr,"num");
};