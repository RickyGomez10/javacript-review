//stacks are useful for: backtracking steps, undo/redo
//Stacks can be achieved multiple ways

//With arrays:
const stack = [4,6,1,3,5];
stack.push(8);
stack.push(9);
console.log(stack);
stack.pop();
console.log(stack);

//with classes

class StackNode{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}

class Stack{
    constructor(value){
        this.top = new StackNode(value);
        this.last = this.top;
        this.size = 1;
    }

    push(value){
        let temporalNode = this.top;
        this.top = new StackNode(value);
        this.top.next = temporalNode;
        this.size++;
    }

    pop(){
        if(this.size == 0 ){
            return null;
        }
        if(this.top == null){
            this.last = null;
        }
        this.top = this.top.next;
        return this.size--;
    }
}


let stack2 = new Stack('value1');
stack2.push('value2');
stack2.push('value3');
stack2.push('value4');
console.log(stack2);
stack2.pop();

console.log(stack2);