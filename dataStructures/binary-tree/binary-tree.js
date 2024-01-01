//tree is a data structure that is composed by leafs
// leaf is a single node that does not contain any child

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

const a2 = new Node(1);
const b2 = new Node(2);
const c2 = new Node(3);
const d2 = new Node(4);
const e2 = new Node(5);
const f2 = new Node(10);

a2.right = c2;
a2.left = b2;
b2.left = d2;
b2.right = e2;
c2.right = f2;


