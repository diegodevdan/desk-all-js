
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

const dfs = (root, stack=[]) => {

  if(!root) return stack;

  stack.push(root.value);

  if(!root.left && !root.right){
    return;
  }

  if(root.left){
    dfs(root.left, stack)
  }

  if(root.right){
    dfs(root.right, stack)
  }

  return stack;
}

// console.log(dfs(a));

const bftWhile = (root) => {
  const result = [];
  const stack = [];

  stack.push(root)

  while(stack.length > 0){
    const current = stack.pop();
    result.push(current.value);

    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
  }

  return result;
}

console.log(bftWhile(a));
const bft= (root, queue=[]) => {
  const q = [];
  const result = []
  q.push(root)
  while(q.length > 0){
    const currentNode = q.shift();
    result.push(currentNode.value);

    if(currentNode.left){
      q.push(currentNode.left)
    }

    if(currentNode.right){
      q.push(currentNode.right)
    }
  }

  return result;
}

console.log(bft(a))

const treeIncludes = (root, target) => {
  const queue = [root];

  while (queue.length > 0){
    const current = queue.shift();
    if(current.value === target)
      return true;

    if(current.left)
      queue.push(current.left)

    if(current.right)
      queue.push(current.right)
  }

  return false;
}

console.log(treeIncludes(a, 'A'))

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);

const one = new Node(11);
const two = new Node(22);
const three = new Node(33);
const four = new Node(4);
const five = new Node(55);
const six = new Node(6);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

const treeSum = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0){
    const current = stack.pop();
    sum += current.value;
    if(current.left)
      stack.push(current.left)

    if(current.right)
      stack.push(current.right)
  }

  return sum;
}

// console.log(treeSum(one));

const treeSumRecursive = (root) => {
  if(!root) return 0;

  return root.value + treeSumRecursive(root.left) + treeSumRecursive(root.right);
}

console.log(treeSumRecursive(one))

const minTreeValue = (root) => {
  const stack = [root];
  let min = root.value;

  while(stack.length > 0){
    const current = stack.pop();
    if(current.value <= min)
      min = current.value;

    if(current.left)
      stack.push(current.left)

    if(current.right)
      stack.push(current.right)
  }

  return min;
}

console.log(minTreeValue(one))

const minTreeValueRec = (root) => {
  if(!root) return Infinity;

  const leftMin = minTreeValueRec(root.left);
  const rightMin = minTreeValueRec(root.right);

  return Math.min(root.value, leftMin, rightMin)
}

console.log(minTreeValueRec(one))

const maxPathSumRec = (root) => {
  if(!root) return -Infinity;

  if(!root.left && !root.right)
    return root.value;

  const maxChildPathSum = Math.max(
      maxPathSumRec(root.left),
      maxPathSumRec(root.right)
  )

  return root.value + maxChildPathSum;
}

console.log(maxPathSumRec(one))

const maxPathSum = (root) => {
  const stack = [root];
  let maxPathSum = root.value;

  while(stack.length > 0){
    const current = stack.pop();
    console.log(current)

    if(root.left.value > root.right.value){
      maxPathSum += current.value;
      stack.push(root.left)
    } else {
      maxPathSum += current.value;
      stack.push(root.right)
    }

    if(root.left && root.right) break;

  }

  return maxPathSum;
}

console.log(maxPathSum(one))

const nestedLoop = (arr=[1,2,3]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j])
    }
  }
}

console.log(nestedLoop([1,2,3]))