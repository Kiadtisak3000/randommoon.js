import { describe, test, expect } from "@jest/globals";
import { randInt } from "../randInt";
describe("Random Integer Test",() =>{
    test("random test",() =>{
        expect(randInt(5).data).toBeLessThanOrEqual(5)
        expect(randInt([9]).data).toBeLessThanOrEqual(9)
    })
    test("specific random test",() =>{
        expect(randInt([5,10]).data).toBeLessThanOrEqual(10)
    })
    test("Fail Test",() =>{
        try{
            randInt([10,5])
            throw new Error("Test Fail!")
        }catch(e:any){expect(e.message).toBe("Range value must more then base value")}
    })
})