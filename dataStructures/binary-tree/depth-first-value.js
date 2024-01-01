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

a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;

//depth first algorithm using stacks
function depthFirstStack(node) {
  if (node == null) {
    return [];
  }
  const result = [];
  const stack = [node];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
}

//recursion depthFirst algorithm
function depthFirstRecursion(node) {
  if (!node) {
    return;
  }
  console.log(node.value);
  depthFirst(node.left);
  depthFirst(node.right);
  return;
}

console.log(depthFirstStack(a));
console.log(depthFirstStack(a));
