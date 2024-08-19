import { randlist } from "./randomlist";

const u16: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
export const rand16 = (length: number) => {
    let newarr:string[] = []
    for (let i = 0 ; i<length ; i++){
        newarr.push(randlist(u16))
    }
    return newarr.join("")
};