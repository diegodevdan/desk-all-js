class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.lenght++
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        let poppedNode = this.tail;
        if(this.lenght === 1){
            this.head = null;
            this.tail = null;
            return poppedNode
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        poppedNode.prev = null
        this.lenght--;

        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;
        if(this.lenght === 1){
            this.head = null;
            this.tail = null;
            return oldHead;
        }

        this.head = this.head.next;
        this.head.prev = null;
        oldHead.next = null;
        oldHead.prev = null;
        this.lenght--;

        return oldHead;
    }

    unshift(value){
        let newNode = new Node(value);
        if(this.lenght === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }

        this.lenght++;
        return this;
    }

    get(index){
        if(index >= this.lenght || index < 0) return null;
        let half = Math.floor(this.lenght/2);
        let i = 0;
        let foundedNode = this.head;

        if(index <= half){
            while(i <= half){
                if(i === index)
                    return foundedNode
                else
                    foundedNode = foundedNode.next
                i++
            }
        } else {
            foundedNode = this.tail;
            i = this.lenght-1
            while(i >= half){
                if(i === index)
                    return foundedNode;
                else
                    foundedNode = foundedNode.prev
                i--
            }
        }
    }

    set(index,value){
        let node = this.get(index)
        if(!node) return false

        node.value = value
        return true
    }

    insert(index,value){
        if(this.lenght < 0 || this.lenght < index) return false;

        if(index === 0)
            return !!this.unshift(value)

        if(index === this.lenght)
            return !! this.push(value)

        let newNode = new Node(value)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next

        beforeNode.next = newNode; newNode.prev = beforeNode;
        newNode.next = afterNode; afterNode.prev = newNode;

        this.lenght++
        return true;
    }

    remove(index){
        if(this.lenght < 0 ||  index >= this.lenght) return undefined;

        if(index === 0)
            return !!this.shift()

        if(index === this.lenght-1)
            return !! this.pop()

        let removedNode = this.get(index)
        removedNode.next.prev = removedNode.prev;
        removedNode.prev.next = removedNode.next;
        removedNode.next = null;
        removedNode.prev = null;

        this.lenght--;
        return removedNode;
    }
}

let doubleList = new DoubleLinkedList();
doubleList.push(10)
doubleList.push(20)
doubleList.push(30)
doubleList.push(40)
doubleList.push(50)
// doubleList.pop()
// doubleList.shift()
// console.log(doubleList)
// console.log(doubleList.unshift(1))
// console.log(doubleList.unshift(-1))
// console.log(doubleList.unshift(-2))
// console.log(doubleList.get(4))
// console.log(doubleList.get(0))
// console.log(doubleList.set(3,41))
// console.log(doubleList.insert(2,210))
// console.log(doubleList.head.next.next)
console.log(doubleList.remove(5))
console.log(doubleList)