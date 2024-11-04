import { describe, test, expect } from "@jest/globals"
import { Variable } from "../lib/var"
import { Zeros } from "../zeros"
import { randlist } from "../randomlist";
const str_template = ["A","B","C"]
const regex_template = /^[ABC]/
const OneDtest = Zeros([5]);
const TwoDtest = Zeros([3,3]);
const strtest = randlist(str_template)
const zero = new Variable(0,"int")
strtest.type = "str"
describe("Variable test",() =>{
    test("Variable structure test",() =>{
        expect(OneDtest).toEqual(new Variable([0,0,0,0,0],"int"))
        expect(TwoDtest).toEqual(new Variable([[0,0,0],[0,0,0],[0,0,0]],"int"))
        expect(regex_template.test(strtest.data)).toEqual(true)
        expect(zero).toEqual(new Variable(0,"int"))
    })
    test("var.Add Test",()=>{
        try{
            OneDtest.Add(5)
            expect(OneDtest).toEqual(new Variable([5,5,5,5,5],"int"))
            TwoDtest.Add(5)
            expect(TwoDtest).toEqual(new Variable([[5,5,5],[5,5,5],[5,5,5]],"int"))
            zero.Add(5)
            expect(zero).toEqual(new Variable(5,"int"))
        }catch(e:any){
            expect(e.message).toBe("Test Fail!")
        }
        try{
            strtest.Add(1)
            throw new Error("Test Fail!")
        }catch(e:any){
            expect(e.message).toBe("Variable.Add support only numeric Type")
        }
    })
    test("var.shape test",()=>{
        expect(OneDtest.shape).toEqual([5,0])
        expect(TwoDtest.shape).toEqual([3,3])
        expect(strtest.shape).toEqual([1,0])
        expect(zero.shape).toEqual([1,0])
    })
    test("var.IsNum test",()=>{
        expect(OneDtest.IsNum).toEqual(true)
        expect(TwoDtest.IsNum).toEqual(true)
        expect(strtest.IsNum).toEqual(false)
        expect(zero.IsNum).toEqual(true)
    })
    test("var.push test",() =>{
        try{
            OneDtest.push([6])
            expect(OneDtest).toEqual(new Variable([5,5,5,5,5,6],"int"))
            expect(OneDtest.shape).toEqual([6,0])
            TwoDtest.push([6,7,8])
            expect(TwoDtest).toEqual(new Variable([[5,5,5],[5,5,5],[5,5,5],[6,7,8]],"int"))
            expect(TwoDtest.shape).toEqual([3,4])
            strtest.push("C")
            expect(regex_template.test(strtest.data)).toEqual(true)
            expect(strtest.shape).toEqual([2,0])
        }catch(e:any){
            expect(e.message).toBe("Test Fail!")
        }
        try{
            zero.push(1)
            throw new Error("Test Fail!")
        }catch(e:any){ expect(e.message).toBe("var.push does not support push value to a numeric variable")}
        try{
            strtest.push(["a"])
            strtest.push(1)
            throw new Error("Test Fail!")
        }catch(e:any){
            expect(e.message).toBe("Type mismatch: Value type doesn't match existing data type.")
        }
        try{
            OneDtest.push(5)
            throw new Error("Test Fail!")
        }catch(e:any){
            expect(e.message).toBe("Value (new_value) must be an Array")
        }
    })
})