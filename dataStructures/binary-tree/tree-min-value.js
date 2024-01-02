class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const a = new Node(8);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(1);
const nullNode = new Node(null);

a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;

function treeMinValueBreadth(root){
    let minValue = root.value;
    const queue = [root]
    while(queue.length > 0){
        const currentNode = queue.shift();
        if(currentNode.value < minValue){
            minValue = currentNode.value;
        }
        if(currentNode.left != null) queue.push(currentNode.left);
        if(currentNode.right != null) queue.push(currentNode.right);
        
    }
    return minValue;
}

function treeMinValueRecursive(root){
    if(root == null) {
        return Infinity;
    }
 
    const minLeft = treeMinValueRecursive(root.left);
    const minRight = treeMinValueRecursive(root.right);
    return Math.min(root.value, minLeft, minRight);

}


console.log(treeMinValueRecursive(a));
console.log(treeMinValueBreadth(a));