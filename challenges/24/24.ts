type Tree = {
  value: string
  left?: Tree
  right?: Tree
} | undefined

function isTreesSynchronized(tree1: Tree, tree2: Tree): [boolean, string] {
  const rootValue = tree1?.value ?? ""

  function isMirror(a: Tree, b: Tree): boolean {
    if (!a && !b) return true
    if (!a || !b) return false
    if (a.value !== b.value) return false
    return isMirror(a.left, b.right) && isMirror(a.right, b.left)
  }

  return [isMirror(tree1, tree2), rootValue]
}
