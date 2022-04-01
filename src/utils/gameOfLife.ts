export const getNextCycle = (grid: number[], rows: number, cols: number) => {}

export const getIndexByGridPosition = (cols: number) =>
    (row: number, col: number) => (row * cols) + col;
