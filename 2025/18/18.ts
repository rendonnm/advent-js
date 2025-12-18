function hasFourInARow(board: string[][]): boolean {
  const checks = [
    { dx: 0, dy: 1 },
    { dx: 1, dy: 0 },
    { dx: 1, dy: 1 },
    { dx: -1, dy: 1 },
  ];

  for (let i = 0; i < board.length; i++) {
    const actualArray = board[i];

    for (let j = 0; j < actualArray.length; j++) {
      const value = actualArray[j];
      if (value === ".") continue;

      for (const check of checks) {
        let counter = 1;
        for (let k = 1; k <= 3; k++) {
          const column = i + check.dy * k;
          if (column >= board.length) break;

          const actualLight = board[column][j + check.dx * k];
          if (actualLight !== value) break;
          counter++;
          if (counter === 4) return true;
        }
      }
    }
  }
  return false;
}
