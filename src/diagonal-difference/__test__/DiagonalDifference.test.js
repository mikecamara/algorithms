import "@testing-library/jest-dom";
import diagonalDifference from "../DiagonalDifference";

describe("Diagonal Difference Test", () => {
    test("Check the difference between both diagonals", ()=> {
        expect(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])).toBe(15)
    })
})