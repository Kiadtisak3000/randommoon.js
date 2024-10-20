import { Variable } from "./lib/var";
/**
 * Generates a Variable object containing an array of evenly spaced numbers over a specified interval.
 *
 * @param start - The starting value of the sequence.
 * @param stop - The end value of the sequence.
 * @param  
 num - The number of evenly spaced samples to generate. Default is 50.
 * @param endpoint - If True, `stop` is the last sample. Otherwise, it is not included. Default is  
 True.
 * @returns A Variable object containing the array of evenly spaced numbers.
 *
 * @example
 * // Generate an array of 5 evenly spaced numbers from 0 to 1 (inclusive)
 * const var1 = linspace(0, 1, 5); // Output: [0, 0.25, 0.5, 0.75, 1]
 *
 * @example
 * // Generate an array of 4 evenly spaced numbers from 1 to 10 (exclusive of 10)
 * const var2 = linspace(1, 10, 4, false); // Output: [1, 4, 7, 10]
 */
export const Linspace = (start:number,stop:number,num:number = 50,endpoint:boolean = true) =>{
    if (num <= 0) {
        throw new Error("Number of samples (num) must be a positive integer.");
      }
    const div = endpoint ? num -1 :num;
    const step = (stop - start) / div;
    const arr = Array(num)
    .fill(0)
    .map((_, i) => start + step * i);

  return new Variable(arr, "num");
}
