const L = true;
const D = false;

type TestCase = [string, boolean[], number, number, boolean[]];

export const TEST_CASES: TestCase[] = [
    [ "1.", [], 0, 0, []],
    [ "2.", [L], 1, 1, [D]],
    [ "3.", [L, L], 2, 1, [D, D]],
    [ "4.", [L, L], 1, 2, [D, D]],
    [ "5.", [L, D, L], 1, 3, [D, L, D]],
    [ "6.", [L, L, L, L, L, L, L, L, L], 3, 3, [L, D, L, D, D, D, L, D, L]],
    [ "7.", [D, D, D, D, L, D, D, D, D], 3, 3, [D, D, D, D, D, D, D, D, D]],
    [ "8.", [D, L, D, L, L, D, D, D, D], 3, 3, [L, L, L, L, L, L, L, L, D]],
    [ "9.", [D, D, D, D, D, D, D, D, L], 3, 3, [D, D, D, D, D, D, D, D, D]],
];