interface Item {
  name: string;
  quantity: number;
  category: string;
}
type Inventory = Item[];
type OrderedInventory = Record<string, Record<string, number>>;

function organizeInventory(inventory: Inventory): OrderedInventory {
  const newInventory: OrderedInventory = {};
  for (const item of inventory) {
    const name = item.name;
    const quantity = item.quantity;
    const category = item.category;

    if (!(category in newInventory)) {
      newInventory[category] = {
        [name]: quantity,
      };
      continue;
    }

    const actualValue = newInventory[category][name] ?? 0;
    newInventory[category][name] = actualValue + quantity;
  }
  return newInventory;
}
