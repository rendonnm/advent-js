function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  let newWarehouse = warehouse.map((row) => [...row]);

  for (let col of drops) {
    for (let i = newWarehouse.length - 1; i >= 0; i--) {
      if (newWarehouse[i][col] === ".") {
        newWarehouse[i][col] = "#";
        if (newWarehouse[i].every((el) => el === "#")) {
          const clearedArray: string[] = [];
          for (let j = 0; j < newWarehouse[i].length; j++) {
            clearedArray.push(".");
          }

          newWarehouse = [
            ...newWarehouse.slice(0, i),
            ...newWarehouse.slice(i + 1),
          ];
          newWarehouse.unshift(clearedArray);
        }
        break;
      }
    }
  }

  return newWarehouse;
}
