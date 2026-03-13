function createXmasTree(height: number, ornament: string): string {
  const lines = [];
  const fullLineLength = height * 2 - 1;
  const midLineLength = height - 1;

  for (let i = 0; i < height; i++) {
    const whiteSpaceLength = midLineLength - i;
    const whiteSpace = "_".repeat(whiteSpaceLength);
    const line = `${whiteSpace}${ornament.repeat(fullLineLength - whiteSpaceLength * 2)}${whiteSpace}`;
    lines.push(line);
  }
  const bottomWhiteSpace = "_".repeat(midLineLength);
  const bottomLine = `${bottomWhiteSpace}#${bottomWhiteSpace}`;

  return [...lines, bottomLine, bottomLine].join("\n");
}
