import { describe, test, expect } from "@jest/globals";
import { Variable } from "../lib/var";
import { rand16 } from "../randomU16";

describe("Generate hexadecimal ", () => {
  const rand: Variable = rand16(5);
  test("length Check", () => {
    expect(rand.data.length).toEqual(5);
  });
  test("String Check",()=>{
    const re = /^[A-f0-9]/;
    expect(re.test(rand.data))
  })
  test("Fail Test",()=>{
    try{
        const f:Variable = rand16(-1);
        throw new Error("Test Fall!")

    }catch(e:any){
        expect(e.message).toBe("Number of Length (length) must be a positive integer.")
    }
  })
});
