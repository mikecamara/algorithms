import "@testing-library/jest-dom";
import lonelyinteger from "../LonelyElement";

describe("Outputs the lonely element of the list", ()=>{
    test("Is there a lonely element in the list", ()=>{
        expect(lonelyinteger([1,1,2,2,3,3,4])).toStrictEqual(4)
    })
})