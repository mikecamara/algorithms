import "@testing-library/jest-dom";
import isAnagram from "../Anagram";

describe("Is Anagram test", ()=>{
    test("Is these two words a anagram", ()=>{
        expect(isAnagram("iceman", "cinema")).toBe(true);
    })

    test("This is not an anagram is must fail", ()=>{
        expect(isAnagram("cat", "dog")).toBe(false);
    })
})

