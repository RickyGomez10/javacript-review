class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);
const nullNode = new Node(null);

a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;

function maxRootToLeafPathSum(root){

}

function maxRootToLeafPathSum(root){
    if(root == null){
        return -Infinity;
    }
    const maxSumLeft = root.value + maxRootToLeafPathSum(root.left);
    const maxSumRight = root.value + maxRootToLeafPathSum(root.right);
    return Math.max(root.value, maxSumLeft, maxSumRight);
}
console.log(maxRootToLeafPathSum(a));