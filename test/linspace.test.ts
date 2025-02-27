import { describe, test, expect } from "@jest/globals"
import { Linspace } from "../linspace"
import { Variable } from "../lib/var"
describe("LinSpace Test",() =>{
    test("Generate LinSpace",() =>{
        expect(Linspace(0,0.2,3)).toEqual(new Variable([0, 0.1,0.2],"num"))
        
    })
    test("Fail Case Test",() =>{
        try{
            Linspace(0,1,-1)
            throw new Error("Fail Test!")
        }catch(e:any){
            expect(e.message).toBe("Number of samples (num) must be a positive integer.")
        }
    })
})