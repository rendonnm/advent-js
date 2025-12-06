type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const glovesCounter = new Map<string, { L: number; R: number }>();
  const matchedGloves: string[] = [];

  for (let { hand, color } of gloves) {
    const gloveObj = glovesCounter.get(color) ?? { L: 0, R: 0 };
    gloveObj[hand] = gloveObj[hand] + 1;
    glovesCounter.set(color, gloveObj);
  }

  glovesCounter.forEach((value, key) => {
    const pairCount = Math.min(value.L, value.R);
    for (let i = 0; i < pairCount; i++) {
      matchedGloves.push(key);
    }
  });

  return matchedGloves;
}
