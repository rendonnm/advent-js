type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";
type Directions = "L" | "R" | "U" | "D";

function moveReno(board: Board, moves: Moves): Result {
  const boardRows = board.split("\n").slice(1, -1);

  const DIRECTIONS: Record<Directions, [number, number]> = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, -1],
    D: [0, 1],
  };

  const CELL_RESULTS: Record<string, Result | undefined> = {
    "#": "crash",
    "*": "success",
  };

  const position = { x: -1, y: -1 };

  for (let i = 0; i < boardRows.length; i++) {
    const xIdx = boardRows[i].indexOf("@");
    if (xIdx !== -1) {
      position.x = xIdx;
      position.y = i;
    }
  }

  if (position.x === -1) return "fail";

  for (const move of moves) {
    const direction = DIRECTIONS[move as Directions];

    const [dx, dy] = direction;
    const newX = position.x + dx;
    const newY = position.y + dy;

    const isOutOfBounds =
      newY < 0 ||
      newY >= boardRows.length ||
      newX < 0 ||
      newX >= boardRows[0]?.length;

    if (isOutOfBounds) return "crash";

    const cellResult = CELL_RESULTS[boardRows[newY][newX]];
    if (cellResult) return cellResult;

    position.x = newX;
    position.y = newY;
  }

  return "fail";
}
