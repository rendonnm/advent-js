function decodeSantaPin(code: string): string | null {
  const codeBlocks = code.split("][");

  let pin = "";
  for (let i = 0; i < codeBlocks.length; i++) {
    const operations = codeBlocks[i].split("");

    let num = 0;
    for (let char of operations) {
      if (char === "[" || char === "]") continue;

      switch (char) {
        case "+":
          if (num === 9) {
            num = 0;
          } else {
            num++;
          }
          break;

        case "-":
          if (num === 0) {
            num = 9;
          } else {
            num--;
          }
          break;

        case "<":
          if (i === 0) return null;
          num = Number(pin[i - 1]);
          break;

        default:
          num = Number(char);
          break;
      }
    }

    pin += num;
  }

  return pin.length === 4 ? pin : null;
}
