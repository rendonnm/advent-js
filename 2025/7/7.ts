function drawTree(height: number, ornament: string, frequency: number): string {
  const treeLines: string[] = [];
  const treeWidth = height * 2 - 1;
  const sideSpaces = (treeWidth - 1) / 2;

  let ornamentCounter = 0;
  for (let i = 0; i < height; i++) {
    const spaces = sideSpaces - i;
    const lineSpaces = " ".repeat(spaces);

    const decoration = treeWidth - spaces * 2;
    let lineDecoration = "";

    for (let j = 0; j < decoration; j++) {
      ornamentCounter++;
      if (ornamentCounter % frequency === 0) {
        lineDecoration += ornament;
      } else {
        lineDecoration += "*";
      }
    }

    const line = `${lineSpaces}${lineDecoration}\n`;
    treeLines.push(line);
  }
  const finalLine = `${" ".repeat(sideSpaces)}#`;

  treeLines.push(finalLine);
  return treeLines.join("");
}
