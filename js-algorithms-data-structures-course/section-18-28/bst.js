class BinarySearchTree{
    constructor() {
        this.root = null
    }

    insertion(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if(value > current.value){
                if(!current.right){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } else {
                if(!current.left){
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find(value){
        if(!this.root) return null;
        if(this.root.value === value) return this.root;
        let current = this.root;

        while(true){
            console.log('traversing', current)
            if(value === current.value) return current;
            if(value > current.value){
                if(current.right){
                    current = current.right
                } else {
                    return false
                }
            } else {
                if(current.left){
                    current = current.left
                } else {
                    return false
                }
            }
        }
    }

    BFS(){
        let node = this.root
        let queue = [node];
        let visited = [];

        while(queue.length){
            node = queue.shift();
            visited.push(node)

            if(node.left){
                queue.push(node.left)
            }

            if(node.right) {
                queue.push(node.right)
            }
        }

        return visited.map(node => node.value);
    }

    DFSPreOder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            visited.push(node);
            if(node.left)
                traverse(node.left)
            if(node.right)
                traverse(node.right)
        }

        traverse(current);
        return visited.map(node => node.value)
    }

    DFSPostOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left)
                traverse(node.left)
            if(node.right) {
                traverse(node.right)
            }
            visited.push(node);
        }
        traverse(current);
        return visited.map(node => node.value)
    }

    DFSInOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left)
                traverse(node.left)
            visited.push(node);
            if(node.right) {
                traverse(node.right)
            }
        }
        traverse(current);
        return visited.map(node => node.value)
    }

    // findR(value) {
    //     return this.findRecursive(this.root, value);
    // }
    //
    // findRecursive(current, value) {
    //     // Base case: current node is null, value not found
    //     if (!current) {
    //         return null;
    //     }
    //
    //     // If the current node has the value we're looking for
    //     if (current.value === value) {
    //         return current;
    //     }
    //
    //     // If the value is smaller, search in the left subtree
    //     if (value < current.value) {
    //         return this.findRecursive(current.left, value);
    //     }
    //
    //     // If the value is larger, search in the right subtree
    //     return this.findRecursive(current.right, value);
    // }
}

class Node{
    constructor(value) {
        this.value = value;
        this.root = null;
    }
}


let tree = new BinarySearchTree();
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(8)
// console.log(tree)

// console.log(tree.insertion(10))
// console.log(tree.insertion(15))
// console.log(tree.insertion(20))
// console.log(tree.insertion(12))
// console.log(tree.insertion(5))
// console.log(tree.insertion(8))
// console.log(tree.insertion(4))
tree.insertion(10)
tree.insertion(15)
tree.insertion(20)
tree.insertion(12)
tree.insertion(5)
tree.insertion(8)
tree.insertion(4)
console.log('==========================')
// console.log(tree.find(10))
// console.log(tree.find(4))
// console.log(tree.find(15))

// console.log(tree.root)
console.log('BFS')
console.log(tree.BFS())
console.log('==========================')
console.log('DFS - Pre-order')
console.log(tree.DFSPreOder())
console.log('==========================')
console.log('DFS - Pre-order')
console.log(tree.DFSPostOrder())
console.log('==========================')
console.log('DFS - In-order')
console.log(tree.DFSInOrder())