import { getGridPositionByIndex, getIndexByGridPosition, getNextCycle } from "./gameOfLife";
import { TEST_CASES } from "./gameOfLife.testCases";

describe("Game Of Life", () => {
    describe("getNextCycle", () => {
        it.each(
            TEST_CASES
        )("%s should calc neighbours correctly", (_, grid, rows, cols, expected) => {
            expect(getNextCycle(grid, rows, cols)).toStrictEqual(expected);
        });
    });

    describe("getIndexByGridPosition", () => {
        it.each([
            ["1.", 10, 0, 0, 0],
            ["2.", 9, 0, 8, 8],
            ["3.", 5, 5, 1, 26],
        ])("%s should calc ind correctly", (_, cols, row, col, expected) => {
            expect(getIndexByGridPosition(cols)(row, col)).toStrictEqual(expected);
        });
    });

    describe("getGridPositionByIndex", () => {
        it.each([
            ["1.", 10, 0, [0, 0]],
            ["2.", 5, 7, [1, 2]],
            ["3.", 3, 13, [4, 1]],
            ["4.", 100, 13, [0, 13]],
            ["5.", 100, 100, [1, 0]],
        ])("%s should calc ind correctly", (_, cols, index, expected) => {
            expect(getGridPositionByIndex(cols)(index)).toStrictEqual(expected);
        });
    });
});