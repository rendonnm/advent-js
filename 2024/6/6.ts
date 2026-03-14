function inBox(box: string[]): boolean {
  for (let i = 1; i < box.length - 1; i++) {
    if (!box[i].includes("*")) continue;
    if (box[i][0] === "#" && box[i][box[i].length - 1] === "#") return true;
  }

  return false;
}
