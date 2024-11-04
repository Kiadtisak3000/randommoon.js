import { Variable } from "../var";

const varadd = (x: number, arr: number[]) => {
  return arr.map((n) => n + x);
};
export const Add = (x:number,vars:Variable) =>{
    const shape: Number[] = vars.shape;
    if (!Array.isArray(vars.data) && vars.IsNum) {
      vars.data += x;
      return;
    }
    if (!vars.IsNum)
      throw new Error("Variable.Add support only numeric Type");
    if (shape[1] == 0) vars.data = varadd(x, vars.data);
    else {
      vars.data = vars.data.map((a: any) => varadd(x, a));
    }
}