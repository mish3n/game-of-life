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

export const getNextCycle = (grid: number[], rows: number, cols: number) => {
    const nextCycle = new Array(grid.length).fill(0);

    grid.forEach((_, ind) => {
        const [row, col] = getGridPositionByIndex(cols)(ind);
        RELATIVE_NEIGHBOUR_POSITIONS.forEach(([relRow, relCol]) => {
            if (isInBounds(rows, cols)(row + relRow, col + relCol)) {
                const neighbourInd = getIndexByGridPosition(cols)(row + relRow, col + relCol);
                nextCycle[ind] += grid[neighbourInd];
            }
        });
    });

    return nextCycle;
}

export const getGridPositionByIndex = (cols: number) =>
    (index: number) => [Math.floor(index / cols), index % cols];

export const getIndexByGridPosition = (cols: number) =>
    (row: number, col: number) => (row * cols) + col;

const isInBounds = (rows: number, cols: number) =>
    (row: number, col: number) => {
        return (
            row >= 0 && col >= 0 &&
            row < rows && col < cols
        );
    }

