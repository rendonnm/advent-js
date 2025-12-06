function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  if (giftsToProduce.length === 0) return [];
  const newGifts: string[] = [];

  function canManufactureGifts(quantity: number) {
    return quantity > 0;
  }

  for (let gift of giftsToProduce) {
    if (!canManufactureGifts(gift.quantity)) continue;
    for (let i = 0; i < gift.quantity; i++) {
      newGifts.push(gift.toy);
    }
  }
  return newGifts;
}
