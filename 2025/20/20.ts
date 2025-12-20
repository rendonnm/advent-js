function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  const newWarehouse = warehouse.map((row) => [...row]);

  for (let col of drops) {
    for (let i = newWarehouse.length - 1; i >= 0; i--) {
      if (newWarehouse[i][col] === ".") {
        newWarehouse[i][col] = "#";
        break;
      }
    }
  }

  return newWarehouse;
}
