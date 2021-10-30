import "@testing-library/jest-dom";
import alpha2CodeToCountry from "../Alpha2CodeToCountry";

describe ("Get country name by entering a alpha2code", () => {
    test('the data is peanut butter', () => {
        return alpha2CodeToCountry("AU").then(data => {
            expect(data).toBe('Australia');
        });
      });
})




