import { describe, test, expect } from "@jest/globals"
import { Variable } from "../lib/var"
import { randuni } from "../randuni"

describe("Random Uniform",() =>{
    test("Value Test",() =>{
        let uni:Variable = randuni([5],1)
        expect(uni.shape).toEqual([5,0])
        expect(uni.IsNum).toEqual(true)

    })
    
    test("2D array Test",() =>{
        const uni = randuni([5,5])
        expect(uni.shape).toEqual([5,5])
    })
    test("Fail Test",() =>{
        expect(randuni([5,5,2])).toEqual(new Variable([],"undefined"))
        expect(randuni([])).toEqual(new Variable([],"undefined"))
    })
})