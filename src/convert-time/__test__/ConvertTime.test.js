import "@testing-library/jest-dom"
import convertTime from "../ConvertTime";

describe('Convert Time', () => {
    test('Test to convert the time', () => {
        expect(convertTime("12:45:54PM")).toBe("12:45:54");
    });
    
    test('Test to convert the time', () => {
        expect(convertTime("07:24:30AM")).toBe("07:24:30");
    });

    test('Test to convert the time', () => {
        expect(convertTime("01:45:54PM")).toBe("13:45:54");
    });

    test('Test to convert the time', () => {
        expect(convertTime("9:45:54PM")).toBe("21:45:54");
    });
});