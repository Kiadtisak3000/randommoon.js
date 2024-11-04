import { Add } from "./var/Add";
import { IsNum } from "./var/IsNum";
import { push_item } from "./var/push";
import { get_shape } from "./var/shape";

export class Variable {
  public data: any;
  public type: string;
  constructor(vars: any, vtype: string) {
    this.data = vars;
    this.type = vtype;
  }
  public push(value: any) {
    push_item(this, value);
  }
  public get IsNum() {
    return IsNum(this)
  }
  public get shape(): Number[] {
    return get_shape(this);
  }
  public Add(x: number) {
    Add(x, this);
  }
}
