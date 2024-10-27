import { randarr } from "./lib/randarr";
import { Variable } from "./lib/var";
/**
 * Generates a Variable object containing an array of random numbers with a normal (Gaussian) distribution.
 *
 * @param shape - An array representing the dimensions of the array (1D or 2D).
 * @param mean - The mean (average) of the normal distribution. Default is 0.
 * @param std - The standard deviation of the normal distribution. Default is 1.
 * @returns A Variable object containing the array of random numbers.
 *
 * @example
 * // Generate a 1D array of 10 random numbers with a mean of 5 and standard deviation of 2.
 * const var1 = randNormal([10], 5, 2);
 *
 * @example
 * // Generate a 2D array (3 rows, 4 columns) with a standard normal distribution (mean 0, std 1).
 * const var2 = randNormal([3, 4]);
 */
export const randNorm = (
  shape: number[],
  mean: number = 0,
  std: number = 1
) => {
  if (shape.length >= 3 || shape.length <= 0)
    return new Variable([], "undefined");
  const gennorm = () => {
    let a = 0,
      b = 0;
    while (a === 0) a = Math.random();
    while (b === 0) b = Math.random();
    const y = Math.sqrt(-2.0 * Math.log(a)) * Math.cos(2.0 * Math.PI * b);
    return y * std + mean;
  };
  let arr:number[][] = [];
  if(shape[1]){
    for(let i =0 ; i < shape[1]; i++){
        arr.push(randarr(shape[0],gennorm).data)
    }
  }else{
    return new Variable(randarr(shape[0],gennorm).data,"float")
  }
  return new Variable(arr,"float")
};