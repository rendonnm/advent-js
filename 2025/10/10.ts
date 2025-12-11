function maxDepth(s: string): number {
  let currentDepth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === "[") {
      currentDepth++;
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    } else if (char === "]") {
      currentDepth--;
      if (currentDepth < 0) {
        return -1;
      }
    } else {
      return -1;
    }
  }

  return currentDepth === 0 ? maxDepth : -1;
}
