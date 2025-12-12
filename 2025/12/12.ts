type Moves = "A" | "B" | "F";

function elfBattle(elf1: string, elf2: string): number {
  let healthElf1 = 3;
  let healthElf2 = 3;

  const movements: Record<Moves, number> = {
    A: -1,
    F: -2,
    B: 0,
  };

  function checkWinner() {
    if (healthElf1 > healthElf2) return 1;
    if (healthElf2 > healthElf1) return 2;
    return 0;
  }

  function makeMoves(move1: Moves, move2: Moves) {
    const elf1Blocks = move1 === "B" && move2 === "A";
    const elf2Blocks = move2 === "B" && move1 === "A";

    if (!elf2Blocks) {
      healthElf2 += movements[move1];
    }

    if (!elf1Blocks) {
      healthElf1 += movements[move2];
    }
  }

  const maxRounds = Math.min(elf1.length, elf2.length);
  for (
    let round = 0;
    round < maxRounds && healthElf1 > 0 && healthElf2 > 0;
    round++
  ) {
    const move1 = elf1[round] as Moves;
    const move2 = elf2[round] as Moves;
    makeMoves(move1, move2);
  }

  return checkWinner();
}
