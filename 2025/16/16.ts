type Gifts = number[];
type MaxWeight = number;
type Result = number | null;

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  if (gifts.length === 0) return 0;

  let packs = 1;
  let currentWeight = 0;

  for (let gift of gifts) {
    if (gift > maxWeight) return null;

    const newValue = currentWeight + gift;

    if (newValue <= maxWeight) {
      currentWeight += gift;
    } else {
      packs++;
      currentWeight = gift;
    }
  }

  return packs;
}
