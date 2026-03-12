function createFrame(names: string[]): string {
  const longestNameLength = Math.max(...names.map((name) => name.length));

  const fullLine = "*".repeat(longestNameLength + 4);
  const nameLines = names.map((name) => {
    const whiteSpaces = longestNameLength - name.length;
    return `* ${name}${" ".repeat(whiteSpaces)} *`;
  });

  return [fullLine, ...nameLines, fullLine].join("\n");
}
