class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class SinglyLinkedList{
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this;
    }

    pop(){

        if(!this.head){
            return undefined
        }

        if(this.length === 1){
            let deletedNode = this.head;
            this.tail = null;
            this.head = null;
            this.length--
            return deletedNode;
        }

        let current = this.head;

        while(current.next && current.next.next){
            current = current.next
        }

        let deletedNode = current.next;
        current.next = null;
        this.tail = current;
        this.length--;

        return deletedNode
    }

    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.value);
    //         current = current.next
    //         if(!current.next){
    //
    //         }
    //     }
    // }

    shift(){
        if(!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null
            this.head = null
            return undefined
        }
        return current;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this;
    }

    get(index){
        if(index < 0 || this.length <= index) return null;

        let i = 0;
        let current = this.head;
        while (i <= index){
            if(!current.next || i === index){
                return current;
            } else {
                current = current.next
            }
            i++
        }
    }

    set(index, value){
        if(index < 0|| this.length <= index) return null;

        let foundNode = this.get(index)
        if(!foundNode) return false;

        foundNode.value = value;
        return true;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;

        if(index === this.length){
            return !!this.push(value)
        }

        if(index === 0){
            return !!this.unshift(value)

        }


        const previous = this.get(index-1);
        let temp = previous.next;
        let newNode = new Node(value);
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;

        if(index === this.length-1){
            return !!this.pop()
        }

        if(index === 0){
            return !!this.shift()
        }

        let previous = this.get(index-1)
        let removedNode = previous.next;
        previous.next = removedNode.next;
        this.length--
        return removedNode;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node
            node = next
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push(10)
list.push(20)
list.push(30)
list.push(40)
// console.log(list.pop())
// console.log(list.shift())
// list.unshift(0)
// console.log(list.get(2))
// console.log(list.set(2,103))
// console.log(list.insert(0,100))
// console.log(list.insert(1,101))
// console.log(list.remove(1))
console.log(list.reverse())