import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "woody li"
          ));
    })

    test('should return andrew id', () => {
        const query = "What is your andrew id?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "wuli"
          ));
    })

    test('should return largest number from list', () => {
        const query = "Which of the following numbers is the largest: 43, 52, 14?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("52");
    })
});