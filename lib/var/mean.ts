import { Variable } from "../var";

export const mean = (vars:Variable) =>{
    if(!vars.IsNum || !Array.isArray(vars.data))throw new Error("Variable.Add support only numeric Array Type");
    let all_sum = 0
    const len:number = vars.shape[1] as number
    vars.data.forEach((v) => {all_sum +=v})
    return all_sum/len
}