class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(10);
const nullNode = new Node(null);
a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;


function treeSumDepth(root){
    if (root == null) return 0;
    
    return root.value + treeSumDepth(root.left) + treeSumDepth(root.right);
}

function treeSumBreadth(root){
    let sum = 0
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        sum += current.value;
        if(current.left != null) queue.push(current.left);
        if(current.right != null) queue.push(current.right);

    }
    return sum;
}
console.log(treeSumDepth(a));
console.log(treeSumBreadth(nullNode));
