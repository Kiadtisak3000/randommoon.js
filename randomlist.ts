import { Variable } from "./lib/var"

/**
 * Selects a random element from an array.
 *
 * This function takes an array as input and returns a `Variable` object containing a randomly
 * selected element from that array.
 *
 * @param arr - The input array from which to select a random element.
 * @returns A Variable object containing the randomly selected element.
 *
 * @example
 * // Select a random element from an array of strings.
 * const colors = ["red", "green", "blue"];
 * const randomColor = randlist(colors);
 * console.log(randomColor.value); // Output: "green" (example)
 *
 * @example
 * // Select a random number from an array.
 * const numbers = [1, 5, 10, 20];
 * const randomNumber = randlist(numbers);
 * console.log(randomNumber.value); // Output: 10 (example)
 */
export const randlist = (arr:any[]) =>{
    if (arr.length == 0 ) throw new Error("Array (arr) can't be a Empty Array")
    const idx = Math.floor(Math.random() * arr.length)
    return new Variable(arr[idx],"any")
}