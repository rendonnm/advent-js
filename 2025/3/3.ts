function drawGift(size: number, symbol: string): string {
  if (size < 2) return "";

  const giftLines = [];

  let fullLine = "";
  for (let i = 0; i < size; i++) {
    fullLine += symbol;
  }

  let middleLine = symbol;
  for (let i = 1; i < size - 1; i++) {
    middleLine += " ";
  }
  middleLine += symbol + "\n";

  giftLines.push(fullLine, "\n");

  for (let i = 1; i < size - 1; i++) {
    giftLines.push(middleLine);
  }

  giftLines.push(fullLine);

  return giftLines.join("");
}
