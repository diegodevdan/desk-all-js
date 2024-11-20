class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


function inOrderTraversal(root) {
  const stack = [];
  const result = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // Push all left nodes to the stack
    while (current !== null) {
      stack.push(current);
      console.log(stack)
      current = current.left;
    }

    // Node to be visited
    current = stack.pop();
    result.push(current.value); // Visit the node

    // Proceed to the right subtree
    current = current.right;
  }

  return result;
}

