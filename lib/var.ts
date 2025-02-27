import { Add } from "./var/Add";
import { IsNum } from "./var/IsNum";
import { mean } from "./var/mean";
import { push_item } from "./var/push";
import { get_shape } from "./var/shape";

export class Variable<Type = any> {
  public data: Type|Type[];
  public type: string;
  constructor(vars: Type|Type[], vtype: string) {
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
  public get mean () {
    return mean(this)
  }
}
