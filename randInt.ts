import { Variable } from "./lib/var";
export const rand = (range: number) =>
  new Variable(Math.round(Math.random() * range + 1), "int");
export const randInt = (range: number | number[]) => {
  if (typeof range == "number") {
    if ((range as number) <= 0) return new Variable(0, "int");
    return rand(range as number);
  } else {
    const param = range as number[];
    if (param.length <= 0 && param.length >= 3) throw new Error("Wrong Length");
    if (param[0] <= 0) return new Variable(0, "int");
    if (param[1] < param[0])
      throw new Error("Range value must more then base vlue");
    if (!param[1]) return rand(param[0]);
    const y = rand(param[1]);
    y.Add(param[0]);
    return y;
  }
};
