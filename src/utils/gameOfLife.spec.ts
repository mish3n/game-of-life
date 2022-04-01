import { getIndexByGridPosition } from "./gameOfLife";

describe("Game Of Life", () => {
    describe("getIndexByGridPosition", () => {
        it.each([
            ["1.", 10, 0, 0, 0],
            ["2.", 9, 0, 8, 8],
            ["3.", 5, 5, 1, 26],
        ])("%s should calc ind correctly", (_, cols, row, col, expected) => {
            expect(getIndexByGridPosition(cols)(row, col)).toStrictEqual(expected);
        });
    });
});