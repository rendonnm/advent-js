function hasFourLights(board: string[][]): boolean {
  const checks = {
    horizontal: [
      [0, +1],
      [0, +2],
      [0, +3],
    ],
    vertical: [
      [+1, 0],
      [+2, 0],
      [+3, 0],
    ],
  };

  function check(
    x: number,
    y: number,
    light: string,
    orientation: "horizontal" | "vertical"
  ) {
    if (orientation === "vertical" && y + 3 >= board.length) return false;

    for (const [dy, dx] of checks[orientation]) {
      const actualLight = board[y + dy][x + dx];
      if (actualLight !== light) return false;
    }

    return true;
  }

  for (let i = 0; i < board.length; i++) {
    const actualArray = board[i];
    const actualArrayLength = board[i].length;

    for (let j = 0; j < actualArrayLength; j++) {
      const value = actualArray[j];
      if (value === ".") continue;

      if (check(j, i, value, "vertical")) return true;
      if (check(j, i, value, "horizontal")) return true;
    }
  }
  return false;
}
