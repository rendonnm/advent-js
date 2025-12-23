type Cell = "S" | "G" | "." | "#";

export function minStepsToDeliver(map: Cell[][]): number {
  const totalRows = map.length;
  const totalCols = map[0]?.length ?? 0;

  if (totalRows === 0 || totalCols === 0) return 0;

  let startRow = -1;
  let startCol = -1;

  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    for (let colIndex = 0; colIndex < totalCols; colIndex++) {
      if (map[rowIndex][colIndex] === "S") {
        startRow = rowIndex;
        startCol = colIndex;
        break;
      }
    }
    if (startRow !== -1) break;
  }

  const minDistanceFromStart: number[][] = Array.from(
    { length: totalRows },
    () => Array(totalCols).fill(-1)
  );
  minDistanceFromStart[startRow][startCol] = 0;

  const bfsQueue: Array<[number, number]> = [[startRow, startCol]];
  let queueReadIndex = 0;

  const neighborOffsets = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const;

  while (queueReadIndex < bfsQueue.length) {
    const [currentRow, currentCol] = bfsQueue[queueReadIndex++];

    for (const [rowOffset, colOffset] of neighborOffsets) {
      const nextRow = currentRow + rowOffset;
      const nextCol = currentCol + colOffset;

      const isInsideMap =
        nextRow >= 0 &&
        nextRow < totalRows &&
        nextCol >= 0 &&
        nextCol < totalCols;
      if (!isInsideMap) continue;

      const isObstacle = map[nextRow][nextCol] === "#";
      if (isObstacle) continue;

      const alreadyVisited = minDistanceFromStart[nextRow][nextCol] !== -1;
      if (alreadyVisited) continue;

      minDistanceFromStart[nextRow][nextCol] =
        minDistanceFromStart[currentRow][currentCol] + 1;

      bfsQueue.push([nextRow, nextCol]);
    }
  }

  let totalStepsToAllGiftHouses = 0;

  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    for (let colIndex = 0; colIndex < totalCols; colIndex++) {
      if (map[rowIndex][colIndex] !== "G") continue;

      const stepsToThisGiftHouse = minDistanceFromStart[rowIndex][colIndex];
      if (stepsToThisGiftHouse === -1) return -1;

      totalStepsToAllGiftHouses += stepsToThisGiftHouse;
    }
  }

  return totalStepsToAllGiftHouses;
}
