import "@testing-library/jest-dom";
import minMax from "../FindMedium";

describe ("Get middle element between the min elements and the max elements", () => {
    test("Does the middle number gets printed with zero in the list", ()=>{
        expect(minMax([0,2,4,6,1])).toBe(2)
    })
})