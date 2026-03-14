type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const shoesPairs: Record<
    number,
    {
      I: number;
      R: number;
    }
  > = {};

  for (const shoe of shoes) {
    const size = shoe.size;
    const type = shoe.type;

    if (!(size in shoesPairs)) {
      shoesPairs[size] = {
        I: 0,
        R: 0,
      };
    }

    shoesPairs[size][type]++;
  }

  const pairs = [];

  for (const [key, { I, R }] of Object.entries(shoesPairs)) {
    const minPairs = Math.min(I, R);
    for (let i = 0; i < minPairs; i++) {
      pairs.push(Number(key));
    }
  }

  return pairs;
}
