import { Variable } from "../var";

export const IsNum = (vars:Variable) =>{
    switch (vars.type.toLowerCase()) {
        case "num":
        case "int":
        case "float":
        case "float8":
        case "float16":
        case "float32":
          return true;
        default:
          return false;
      }
}