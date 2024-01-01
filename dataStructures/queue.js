//Queue is a FIFO data structure, store collection of items
//Operations:
//  add to back of the queue (enqueue)
//  remove front of queue (dequeue)

//Use cases:
//  "First come, first server" order
//  tracking requests for a limited resource
//  graph algorithms

//Implementation with arrays

const queue = [];
queue.push("a");
queue.push("b");
queue.push("c");
console.log(queue);
//shift function deletes the first element in the array, this means, first come, first deleted/served
queue.shift();
console.log(queue);

//implementation with nodes
class QueueNode {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(value) {

    if (this.front == null && this.back == null && this.size == 0) {
      this.front = new QueueNode(value);
      this.back = this.front;
    } else {
      this.back.next = new QueueNode(value);
      this.back = this.back.next;
    }
    return this.size++;
  }

  dequeue(){
    const temporalNode = this.front;
    this.front = this.front.next;
    this.size--;
  }

}

let structuredQueue = new Queue();
structuredQueue.enqueue("value1");
structuredQueue.enqueue("value2");
structuredQueue.enqueue("value3");
structuredQueue.enqueue("value4");
console.log(structuredQueue);
console.log(structuredQueue.front.next);