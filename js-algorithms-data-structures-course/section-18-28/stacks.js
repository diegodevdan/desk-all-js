// let stack = [];
// stack.push('google')
// stack.push('amazon')
// stack.push('instagram')
// console.log(stack)
// stack.pop();

//Stacks - LIFO
//Basically  the array methods: push, pop, unshift, shift
//There is more than one way of implementing a stack
//--Array implementation
//--Linked list implementation



//From scratch

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop(){
        if(this.size === 0) return null;

        let temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
            this.size--
        } else {
            this.first = this.first.next
            this.size--
            return temp.value
        }


    }
}


let stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.pop())
console.log(stack)

