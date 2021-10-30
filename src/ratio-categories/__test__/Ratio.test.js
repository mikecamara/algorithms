import "@testing-library/jest-dom";
import plusMinus from "../Ratio";

describe("Calculate ratios", () => {
    test("Are the ratios correct",()=>{
        expect(plusMinus([-4, 3, -9, 0, 4, 1 ])).toStrictEqual(["0.500000", "0.166667", "0.333333"])
    })
})