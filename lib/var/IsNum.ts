import { Variable } from "../var";

export const IsNum = (vars:Variable):Boolean =>{
        const numtype:string[] = ["num","int","float","float8","float16","float32"]
        return numtype.includes(vars.type)
}