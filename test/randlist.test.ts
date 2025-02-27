import { describe, test, expect } from "@jest/globals"
import { Variable } from "../lib/var"
import { randlist } from "../randomlist"
describe("Random from Array test",()=>{
    test("Random test",()=>{
        const data = [1,2,3]
        expect(randlist(data).shape).toEqual([0])
    })
    test("Fail Test",()=>{
        try{
            randlist([])
            throw new Error("Test Fail!")
        }catch(e:any){expect(e.message).toBe("Array (arr) can't be a Empty Array")}
    })
})