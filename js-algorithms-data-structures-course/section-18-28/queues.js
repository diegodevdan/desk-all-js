// let q = []
// q.push(1)
// q.push(2)
// q.push(3)
// q.shift()
// q.shift()
// q.shift()
// //Different ways to implement a queue

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size
    }

    dequeue(){
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

let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q)