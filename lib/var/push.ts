import { Variable } from "../var";

export const push_item = (vars: Variable,value:any) => {
  if (Array.isArray(vars.data)) {
    if (!Array.isArray(value))
      throw new Error("Value (new_value) must be an Array");
    const a_shape = vars.shape;
    a_shape[1] == 0 ? vars.data.push(...value):vars.data.push(value)
  } else {
    if (typeof value == typeof vars.data && !vars.IsNum) vars.data + value.join();
    else if (vars.IsNum)
      throw new Error("var.push does not support push value to a numeric variable");
    else throw new TypeError("Type mismatch: Value type doesn't match existing data type.");
  }
};
