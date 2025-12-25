🎄 Reto #24: Verifica si los árboles son espejos mágicos

Dificultad: 🟠 Medio

En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos.  

Dos árboles binarios son espejos si:
- Las raíces de ambos árboles tienen el mismo valor.
- Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.

Los árboles se representan con tres propiedades: value, left y right. Dentro de estas dos últimas van mostrando el resto de ramas (si es que tienen).

Tu función debe verificar si los árboles están sincronizados y devolver un array donde:
1. La primera posición indica si los árboles están sincronizados (true o false).
2. La segunda posición devuelve el valor de la raíz del primer árbol.

🔹 Ejemplos de uso:  

const tree1 = {
  value: '',
  left: { value: '⭐' },
  right: { value: '' }
}

const tree2 = {
  value: '',
  left: { value: '' },
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '']

isTreesSynchronized(tree1, tree3) // [false, '']
isTreesSynchronized(tree1, tree4) // [false, '']
isTreesSynchronized(
  { value: '' },
  { value: '‍' }
) // [false, '']
