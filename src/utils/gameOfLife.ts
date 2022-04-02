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

export const getNextCycle = (grid: boolean[], rows: number, cols: number) => {
    const getGridPos = getGridPositionByIndex(cols);
    const getInd = getIndexByGridPosition(cols);
    const isInGrid = isInBounds(rows, cols);

    const nextCycle = new Array(grid.length).fill(false);

    grid.forEach((cell, ind) => {
        const [row, col] = getGridPos(ind);
        let neighbourCount = 0;
        RELATIVE_NEIGHBOUR_POSITIONS.forEach(([relRow, relCol]) => {
            if (isInGrid(row + relRow, col + relCol)) {
                const neighbourInd = getInd(row + relRow, col + relCol);
                neighbourCount += grid[neighbourInd] ? 1 : 0;
            }
        });

        nextCycle[ind] = shouldLive(cell)(neighbourCount);
    });

    return nextCycle;
}

export const shouldLive = (isCellAlive: boolean) => (neighbourCount: number) => {
    if (isCellAlive) {
        return neighbourCount >= 2 && neighbourCount <= 3;
    }

    return neighbourCount === 3;
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

