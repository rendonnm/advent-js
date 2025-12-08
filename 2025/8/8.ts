function findUniqueToy(toy: string): string {
  const letterCount = new Map<string, number>();
  const toyLower = toy.toLowerCase();

  for (let i = 0; i < toyLower.length; i++) {
    const lowerLetter = toyLower[i];
    const value = letterCount.get(lowerLetter) ?? 0;
    letterCount.set(lowerLetter, value + 1);
  }

  for (const char of toy) {
    const lowerChar = char.toLowerCase();
    const value = letterCount.get(lowerChar);
    if (value === 1) return char;
  }

  return "";
}
