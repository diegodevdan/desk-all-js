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


function dfs(root){
  const stack = [root];
  const results = [];

  while(stack.length > 0){
    let current = stack.pop();
    results.push(current.value);

    if(current.right){
      stack.push(current.right)
    }

    if(current.left){
      stack.push(current.left)

    }
  }

  return results;
}
console.log(dfs(a));

function bfs(root){
  const queue = [root];
  const results = [];

  while (queue.length > 0){
    let current = queue.shift();
    results.push(current.value);

    if(current.left){
      queue.push(current.left)
    }

    if(current.right){
      queue.push(current.right)
    }
  }

  return results;
}
console.log(bfs(a))

function iot(root){
  let stack = [];
  let results = [];
  let current = root;

  while(current !== null || stack.length > 0){
    while(current !== null){
      stack.push(current);
      current = current.left
    }

    current = stack.pop();
    results.push(current.value);

    current = current.right;
  }

  return results;
}

console.log(iot(a))


const one = new Node(11);
const two = new Node(22);
const three = new Node(33);
const four = new Node(4);
const five = new Node(55);
const six = new Node(1);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
function minValue(root){
  let queue = [root];
  let min = root.value;

  while(queue.length > 0){
    let current = queue.shift();
    if(current.value < min)
      min = current.value;

    if(current.left){
      queue.push(current.left)
    }

    if(current.right){
      queue.push(current.right)
    }
  }

  return min;
}

console.log(minValue(one));

function sumTreeValues(root){
  const stack = [root];
  let sum = 0;

  while(stack.length > 0){
    let current = stack.pop();
    sum += current.value;

    if(current.right){
      stack.push(current.right)
    }

    if(current.left){
      stack.push(current.left)
    }
  }

  return sum;
}

console.log(sumTreeValues(one));

function maxPathSum(root){
  if(!root) return -Infinity;

  if(!root.left || !root.right)
    return root.value;

  const maxSum = Math.max(
      maxPathSum(root.left),
      maxPathSum(root.right),
  )

  return root.value + maxSum;
}

console.log(maxPathSum(one))


//ROBOTS

function isRobotReturnedOrigin(instructions){
  let x=0, y=0;

  for (let i =0; i < instructions.length; i++){
    if(instructions[i] === 'U'){
      y += 1;
    }

    if(instructions[i] === 'D'){
      y -= 1;
    }

    if(instructions[i] === 'R'){
      x += 1;
    }

    if(instructions[i] === 'L'){
      x -= 1;
    }
  }

  return (x === 0 && y === 0);
}

console.log(isRobotReturnedOrigin('UDLR'))
console.log(isRobotReturnedOrigin('UDLRUDLR'))
console.log(isRobotReturnedOrigin('ULLR'))
console.log(isRobotReturnedOrigin('UDLD'))

function isRobotBounded(instructions){
  const direction = [[0,1], [1,0], [0, -1], [-1,0]];
  let x =0, y=0;
  let orientation = 0

  for (let i = 0; i < instructions.length; i++) {
    if(instructions[i] === 'G'){
      x += direction[orientation][0]
      y += direction[orientation][1]
    } else if(instructions[i] === 'L'){
      orientation = (orientation + 3) % 4;
    } else if(instructions[i] === 'R'){
      orientation = (orientation + 1) % 4;
    }
  }

  return (x === 0 && y===0) || orientation !== 0
}

console.log(isRobotBounded('GGLLGG'))
console.log(isRobotBounded('GGLLGL'))
console.log(isRobotBounded('GGLLLL'))
