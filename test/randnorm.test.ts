import { describe, test, expect } from "@jest/globals"
import { Variable } from "../lib/var"
import { randNorm } from "../randnorm"

describe("Generate Normalize",() =>{
    test("Generator Test",()=>{
        expect(randNorm([5],2).shape).toEqual([5,0])
        expect(randNorm([5,5],1).shape).toEqual([5,5])
        expect(randNorm([5]).IsNum).toEqual(true)
    })
    test("Fail Test",()=>{
        expect(randNorm([5])).toEqual(new Variable([],"undefined"))
    })
})