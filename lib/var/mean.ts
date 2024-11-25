import { flatten } from "../flatten_array";
import { Variable } from "../var";
const findmean = (arr: number[]) => {
  let all_sum = 0;
  const len: number = arr.length as number;
  arr.forEach((v) => {
    all_sum += v;
  });
  return all_sum / len;
};
export const mean = (vars: Variable) => {
  if (!vars.IsNum || !Array.isArray(vars.data)) {
    throw new Error("Variable.Add support only numeric Array Type");
  }
  let arr = vars.data
  if(vars.shape[1] as number >= 1){arr = flatten(vars.data)}
  return findmean(arr)
};
