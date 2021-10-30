import "@testing-library/jest-dom";
import minMax from "../MinMax";

describe("Insert an array of integers get you min and max sum values", ()=>{
    test("Is results of min and max sums correct",()=>{
        expect(minMax([1,2,3,4,5])).toStrictEqual([10, 14])
    })

    test("Different order check if results of min and max sums correct",()=>{
        expect(minMax([4,3,5,1,2])).toStrictEqual([10, 14])
    })
})