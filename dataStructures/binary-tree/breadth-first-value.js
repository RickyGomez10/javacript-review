//breadth first value algorithm using queues
function breadthFirstValueQueue(root) {
    const queue = [root];
    while (queue.length >= 1) {
      const arrayFirstNode = queue.shift();
      console.log(arrayFirstNode.value);
  
      if (arrayFirstNode.left != null) {
        queue.push(arrayFirstNode.left);
      }
  
      if (arrayFirstNode.right) {
        queue.push(arrayFirstNode.right);
      }
    }
  }
//breadth first value algorithm using recursion is not possible, because breadth first algorithm uses a QUEUE and a recursion is a STACK
  
breadthFirstValueQueue(a);