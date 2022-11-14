import { describe, it, expect } from "vitest";
import { Shelfmark } from "./shelfmark";

describe("Shelfmark", () => {
    it("order is correct", () => {
        const tests: { a: string; b: string; expected: number }[] = [
            { a: "K840 Coo.", b: "K840 Coz.", expected: -1 },
            // TODO: Add more test cases
        ];

        for (const { a, b, expected } of tests) {
            expect(new Shelfmark(a).compare(new Shelfmark(b))).toBe(expected);
        }
    });
});
