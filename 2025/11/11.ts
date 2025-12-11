function findUnsafeGifts(warehouse: string[]): number {
  let giftCounter = 0;

  function checkNearCameras(x: number, y: number) {
    const up = (warehouse[y - 1] ?? [])[x] === "#";
    const down = (warehouse[y + 1] ?? [])[x] === "#";
    const left = warehouse[y][x - 1] === "#";
    const right = warehouse[y][x + 1] === "#";

    return up || down || left || right;
  }

  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      if (warehouse[i][j] !== "*") continue;
      const hasNearCamera = checkNearCameras(j, i);
      if (!hasNearCamera) giftCounter++;
    }
  }

  return giftCounter;
}
