type Cell = "S" | "E" | "." | "#";

export function canEscape(maze: Cell[][]): boolean {
  const rows = maze.length;
  if (rows === 0) return false;

  let startRow = -1;
  let startCol = -1;

  for (let r = 0; r < rows; r++) {
    const cols = maze[r].length;
    for (let c = 0; c < cols; c++) {
      if (maze[r][c] === "S") {
        startRow = r;
        startCol = c;
        break;
      }
    }
    if (startRow !== -1) break;
  }

  if (startRow === -1) return false;

  const visited: boolean[][] = maze.map((row) => row.map(() => false));
  const queue: Array<[number, number]> = [];

  queue.push([startRow, startCol]);
  visited[startRow][startCol] = true;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;

    if (maze[r][c] === "E") return true;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= rows) continue;
      if (nc < 0 || nc >= maze[nr].length) continue;

      if (visited[nr][nc]) continue;
      if (maze[nr][nc] === "#") continue;

      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
  }

  return false;
}
