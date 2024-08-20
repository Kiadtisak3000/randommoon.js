export const randarr = (length: number, value: any = () => "") => {
  let arr: any[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(value());
  }
  return arr;
};
