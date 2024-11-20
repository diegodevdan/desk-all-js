
class MaxBinaryHeap{
    constructor() {
        this.values = [44,39,33,18,27,12]
    }

    insertion(element){
        this.values.push(element)
        return this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex];

            if(element <= parent) break;

            this.values[parentIndex] = element;
            this.values[index] = parent
            index = parentIndex
        }

        return this.values;
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] =  end;

        //Bubble down

        this.bubbleDown()

        return max;
    }

    bubbleDown(){
        let index = 0;
        const length = this.values.length
        const element = this.values[0]

        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild > element){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIndex;
                }
            }

            if(swap === null)  break;
            this.values[index] = this.values[swap]
            this.values[swap] = element;

            index  = swap;
        }
    }
}

class PriorityQueue{
    constructor() {
        this.values = []
    }

    enqueue(value, priority){
        const newNode = new Node(value, priority)
        this.values.push(newNode)
        return this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex];

            if(element.priority <= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent
            index = parentIndex
        }

        return this.values;
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        this.values[0] =  end;

        //Bubble down

        this.bubbleDown()

        return min;
    }

    bubbleDown(){
        let index = 0;
        const length = this.values.length
        const element = this.values[0]

        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild.priority > element.priority){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIndex;
                }
            }

            if(swap === null)  break;
            this.values[index] = this.values[swap]
            this.values[swap] = element;

            index  = swap;
        }
    }
}

class Node{
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
}


const maxBinaryHeap = new MaxBinaryHeap();
// console.log(maxBinaryHeap.insertion(55));
// console.log(maxBinaryHeap.insertion(1));
// console.log(maxBinaryHeap.insertion(20));
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap);

const ER = new PriorityQueue();
ER.enqueue('common cold', 1)
ER.enqueue('gunshot wound', 5)
ER.enqueue('high fever', 2)
console.log(ER.dequeue())
console.log(ER)
