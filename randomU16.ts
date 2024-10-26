import { Variable } from "./lib/var";
import { randlist } from "./randomlist";

const u16: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
/**
 * Generates a Variable object containing a random string of hexadecimal characters.
 *
 * This function creates a string of random hexadecimal characters (0-9 and a-f) with 
 * the specified length. It uses the `randlist` function (presumably from your `./lib/randlist`
 * module) to generate each hexadecimal character and then joins them into a single string.
 *
 * @param length - The desired length of the hexadecimal string.
 * @returns A Variable object containing the random hexadecimal string.
 *
 * @example
 * // Generate a random hexadecimal string of length 10.
 * const var1 = rand16(10);
 * console.log(var1.data); // Output: "a3f2c5b8d1e4" (example)
 */
export const rand16 = (length: number) => {
    if(length <= 0) throw new Error("Number of Length (length) must be a positive integer.")
    let newarr:string[] = []
    for (let i = 0 ; i<length ; i++){
        newarr.push(randlist(u16).data)
    }
    return new Variable(newarr.join(""),"str")
};