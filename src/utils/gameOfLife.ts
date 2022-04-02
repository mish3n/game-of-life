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

export const countNeighbours = (grid: boolean[], rows: number, cols: number) => {
    const nextCycle = new Array(grid.length).fill(false);

    grid.forEach((_, ind) => {
        const [row, col] = getGridPositionByIndex(cols)(ind);
        let neighbourCount = 0;
        RELATIVE_NEIGHBOUR_POSITIONS.forEach(([relRow, relCol]) => {
            if (isInBounds(rows, cols)(row + relRow, col + relCol)) {
                const neighbourInd = getIndexByGridPosition(cols)(row + relRow, col + relCol);
                neighbourCount += grid[neighbourInd] ? 1 : 0;
            }
        });
        nextCycle[ind] = neighbourCount;
    });

    return nextCycle;
}

export const getNextCycle = (grid: boolean[], rows: number, cols: number) => {
    const nextCycle = new Array(grid.length).fill(false);

    grid.forEach((_, ind) => {
        const [row, col] = getGridPositionByIndex(cols)(ind);
        let neighbourCount = 0;
        RELATIVE_NEIGHBOUR_POSITIONS.forEach(([relRow, relCol]) => {
            if (isInBounds(rows, cols)(row + relRow, col + relCol)) {
                const neighbourInd = getIndexByGridPosition(cols)(row + relRow, col + relCol);
                neighbourCount += grid[neighbourInd] ? 1 : 0;
            }
        });
        nextCycle[ind] = shouldLive(neighbourCount);
    });

    return nextCycle;
}

export const shouldLive = (neighbourCount: number) => {
    return neighbourCount >= 2 && neighbourCount <= 3;
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

