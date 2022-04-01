const RELATIVE_NEIGHBOUR_POSITIONS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];

export const getNextCycle = (grid: number[], rows: number, cols: number) => {}

export const getGridPositionByIndex = (cols: number) =>
    (index: number) => [Math.floor(index / cols), index % cols];

export const getIndexByGridPosition = (cols: number) =>
    (row: number, col: number) => (row * cols) + col;
