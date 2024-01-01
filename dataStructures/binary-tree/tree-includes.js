class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

//Tree includes
function treeIncludesProblemBreadth(root, valueToFind) {
  //using breadth first value algorithm
  const queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.value == valueToFind) return true;

    if (currentNode.left != null) queue.push(currentNode.left);
    if (currentNode.right != null) queue.push(currentNode.right);
  }
  return false;
}

function treeIncludesProblemDepth(root, valueToFind) {
  if (root == null) return false;
  if (root.value == valueToFind) return true;
  return (
    treeIncludesProblemDepth(root.left, valueToFind) ||
    treeIncludesProblemDepth(root.right, valueToFind)
  );
}

console.log(treeIncludesProblemBreadth(a, "z"));
console.log(treeIncludesProblemDepth(a, "c"));
