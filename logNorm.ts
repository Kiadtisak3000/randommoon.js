import { Variable } from "./lib/var";
import { gennorm } from "./randnorm";
/**
 * Generates a random number from a log-normal distribution.
 *
 * A log-normal distribution is a probability distribution of a random variable whose logarithm is normally distributed.  

 *
 * @param {number} mean - The mean of the underlying normal distribution.
 * @param {number} std - The standard deviation of the underlying normal distribution.
 * @returns {number} A random number sampled from the log-normal distribution.
 *
 * @example
 * ```javascript
 * const randomLogNormalValue = randLogNorm_dist(2, 1);
 * consol.log(randomLogNormalValue.data)
 * ```
 */
export const randLogNorm_dist = (mean: number, std: number) => {
  const Norm = gennorm(mean,std);
  const y = Math.exp(Norm);
  return new Variable(y,"float");
};