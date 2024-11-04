import { Variable } from "../var";

export const get_shape = (vars: Variable) => {
  if (!Array.isArray(vars.data)) {
    if (vars.IsNum || vars.type === "str")
      return [vars.data.toString().length, 0];
    else return [0];
  }
  if (!Array.isArray(vars.data[0])) return [vars.data.length, 0];
  let sh: number[] = [];
  sh[1] = vars.data.length;
  sh[0] = vars.data.reduce((x: any, y: any) => Math.max(x, y.length), 0);
  return sh;
};
