export class Variable {
  public data: any;
  public type: string;
  constructor(vars: any, vtype: string) {
    this.data = vars;
    this.type = vtype;
  }
  public get shape(): Number[] {
    if (!Array.isArray(this.data)) return [0];
    if (!Array.isArray(this.data[0])) return [this.data.length, 0];
    let sh: number[] = [];
    sh[1] = this.data.length;
    sh[0] = this.data.reduce((x, y) => Math.max(x, y.length), 0);
    return sh;
  }
  private varadd(x: number, arr: number[]) {
    return arr.map((n) => n + x);
  }
  public Add(x: number) {
    const shape: Number[] = this.shape;
    if (shape[0] == 0 && this.type == "num") {
      this.data += x;
      return;
    }
    if (this.type != "num")
      throw new Error("Variable.Add support only numeric Type");
    if (shape[1] == 0) this.data = this.varadd(x, this.data);
    else {
      this.data = this.data.map((a: any) => this.varadd(x, a));
    }
  }
}