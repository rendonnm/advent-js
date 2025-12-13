type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  function searchElement(
    level: [string, Gift | Record<string, Gift>][],
    history: string[]
  ): Path {
    for (let element of level) {
      const [key, value] = element;

      if (typeof value === "object") {
        const result = searchElement(Object.entries(value), [...history, key]);
        if (result.length > 0) return result;
      }

      if (value === gift) return [...history, key];
    }
    return [];
  }

  return searchElement(Object.entries(workshop), []);
}
