type Factory = string[];
type Result = "completed" | "broken" | "loop";
type Move = ">" | "<" | "^" | "v";

function runFactory(factory: Factory): Result {
  const position = {
    x: 0,
    y: 0,
  };

  const positions: Record<string, number> = {
    "0,0": 1,
  };

  const moves: Record<Move, { x: number; y: number }> = {
    ">": {
      x: 1,
      y: 0,
    },
    "<": {
      x: -1,
      y: 0,
    },
    "^": {
      x: 0,
      y: -1,
    },
    v: {
      x: 0,
      y: 1,
    },
  };

  while (true) {
    const actualLine = factory[position.y];
    const actualPosition = actualLine[position.x];

    if (actualPosition === ".") return "completed";

    const newX = position.x + moves[actualPosition as Move].x;
    const newY = position.y + moves[actualPosition as Move].y;

    if (
      newY < 0 ||
      newY >= factory.length ||
      newX < 0 ||
      newX >= actualLine.length
    )
      return "broken";

    position.x = newX;
    position.y = newY;

    const positionKey = `${newX},${newY}`;
    if (positionKey in positions) {
      return "loop";
    } else {
      positions[positionKey] = 1;
    }
  }
}
