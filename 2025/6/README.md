# Reto #6: 🧤 Emparejando guantes

## Descripción

En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

- `hand`: indica si es un guante izquierdo (`"L"`) o derecho (`"R"`).
- `color`: el color del guante (`string`).

Tu misión es escribir una función `matchGloves` que reciba un array de guantes y devuelva:

- Un array de **strings** con los **colores de todos los pares encontrados**.
- Un par válido está formado por **un guante izquierdo y uno derecho del mismo color**.
- Si hay **varios pares del mismo color**, ese color debe aparecer repetido en el resultado.
- Si **no hay ningún par válido**, debes devolver un array vacío (`[]`).

## Reglas

- Cada elemento del array de entrada tiene la forma:

  ```ts
  type Glove = { hand: "L" | "R"; color: string };
  ```

- Un par solo es válido si:
  - Hay al menos un guante izquierdo (`"L"`) de ese color.
  - Hay al menos un guante derecho (`"R"`) del mismo color.

- Por cada par que puedas formar de un color, debes añadir ese color una vez al array resultado.
  - Ejemplo: si hay 3 izquierdos y 2 derechos de color `"gold"`, puedes formar **2 pares**, así que `"gold"` debe aparecer **2 veces** en el resultado.

## Ejemplos

```javascript
const gloves = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];

matchGloves(gloves);
// ["red", "green"]

const gloves2 = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];

matchGloves(gloves2);
// ["gold", "gold"]

const gloves3 = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];

matchGloves(gloves3);
// []
```
