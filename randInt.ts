import { Variable } from "./lib/var";
export const rand = (n: number,m:number = 1) =>
  new Variable(Math.round(Math.random() * (n-m))+m, "int");
/**
 * Generates a random integer based on different input types:
 *
 * 1. **Single number:** Generates a random integer between range number.
 * 2. **Array of two numbers:** Generates a random integer between the two specified numbers (inclusive).
 *
 * @param {number | number[]} range - The range for the random integer.
 *   - If a single number is provided, it's the maximum value.
 *   - If an array is provided, it should contain two numbers: the minimum and maximum values.
 * @returns {Variable} A `Variable` object containing the random integer.
 * @throws {Error} If the input array has an incorrect length or invalid values.
 *
 * @example
 * // Generate number example
 * const randomNum1 = randInt(5).data; // Generates a random integer between 1 and 5
 * 
 * @example
 * 
 * // Generate from base to range example
 * const randomNum2 = randInt([10, 20]).data; // Generates a random integer between 10 and 20
 * 
 */
export const randInt = (...range:number[]) => {
    const param = range as number[];
    if (param.length <= 0 && param.length >= 3) throw new Error("Wrong Length");
    if (param[0] <= 0) return new Variable(0, "int");
    if (param[1] < param[0])
      throw new Error("Range value must more then base value");
    if (!param[1]) return rand(param[0]);
    const y = rand(param[1],param[0]);
    return y;
};