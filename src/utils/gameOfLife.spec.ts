import { getGridPositionByIndex, getIndexByGridPosition, getNextCycle } from "./gameOfLife";

describe("Game Of Life", () => {
    describe("getNextCycle", () => {
        const L = true;
        const D = false;
        it.each([
            [ "1.", [], 0, 0, []],
            [ "2.", [L], 1, 1, [D]],
            [ "3.", [L, L], 2, 1, [D, D]],
            [ "4.", [L, L], 1, 2, [D, D]],
            [ "5.", [L, D, L], 1, 3, [D, L, D]],
            [ "6.", [L, L, L, L, L, L, L, L, L], 3, 3, [L, D, L, D, D, D, L, D, L]],
            [ "7.", [D, D, D, D, L, D, D, D, D], 3, 3, [D, D, D, D, D, D, D, D, D]],
            [ "8.", [D, L, D, L, L, D, D, D, D], 3, 3, [L, L, L, L, L, L, L, L, D]],
            [ "9.", [D, D, D, D, D, D, D, D, L], 3, 3, [D, D, D, D, D, D, D, D, D]],
        ])("%s should calc neighbours correctly", (_, grid, rows, cols, expected) => {
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