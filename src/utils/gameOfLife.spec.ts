import { getGridPositionByIndex, getIndexByGridPosition, getNextCycle } from "./gameOfLife";

describe("Game Of Life", () => {
    describe("getNextCycle", () => {
        it.each([
            [ "1.", [], 0, 0, []],
            [ "2.", [1], 1, 1, [0]],
            [ "3.", [1, 1], 2, 1, [1, 1]],
            [ "4.", [1, 1], 1, 2, [1, 1]],
            [ "5.", [1, 0, 1], 1, 3, [0, 2, 0]],
            [ "6.", [1, 1, 1, 1, 1, 1, 1, 1, 1], 3, 3, [3, 5, 3, 5, 8, 5, 3, 5, 3]],
            [ "7.", [0, 0, 0, 0, 1, 0, 0, 0, 0], 3, 3, [1, 1, 1, 1, 0, 1, 1, 1, 1]],
            [ "8.", [0, 1, 0, 1, 1, 0, 0, 0, 0], 3, 3, [3, 2, 2, 2, 2, 2, 2, 2, 1]],
            [ "9.", [0, 0, 0, 0, 0, 0, 0, 0, 1], 3, 3, [0, 0, 0, 0, 1, 1, 0, 1, 0]],
        ])("%s. should calc neighbours correctly", (_, grid, rows, cols, expected) => {
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