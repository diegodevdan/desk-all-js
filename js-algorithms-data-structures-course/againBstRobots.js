class Node{
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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

function dft(root){
  let stack = [root];
  let results = [];
  while (stack.length > 0){
    let current = stack.pop();
    results.push(current.value)


    if(current.right){
      stack.push(current.right)
    }


    if(current.left){
      stack.push(current.left)
    }
  }

  return results;
}

// console.log(dft(a))

function bfst(root, target){
  const queue = [root];
  const results = []

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

// console.log(bfst(a, 'B'))


function treeSum(root){
  const stack = [root];
  let sum;

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

// console.log(treeSum(a))

function iot(root){
  let stack = [];
  let result = [];
  let current = root;

  while(current !== null || stack.length > 0){
    while(current !== null){
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    result.push(current.value);

    current = current.right;
  }

  return result;
}

console.log(iot(a))

//ROBOT

function robotReturnToTheOrigin(instructions){
  let x = 0, y=0;

  for (const instruction of instructions) {
    if(instruction === 'U')
      y += 1
    if(instruction === 'D')
      y -= 1
    if(instruction === 'R')
      x += 1
    if(instruction === 'L')
      x -= 1
  }

  return (x === 0 && y === 0)
}

// console.log(robotReturnToTheOrigin("UDLR"))
// console.log(robotReturnToTheOrigin("UUDDLLRR"))
// console.log(robotReturnToTheOrigin("UUDDLLRD"))

function isBoundedRobot(instructions){
  const directions = [[0,1], [1,0], [0,-1], [-1, 0]];
  let x = 0, y= 0;
  let dir = 0;

  for (let i = 0; i < instructions.length; i++) {
    if(instructions[i] === 'G'){
      x += directions[dir][0];
      y += directions[dir][1];
    } else if (instructions[i] === 'L'){
      dir = (dir + 3) % 4;
    } else if (instructions[i] === 'R'){
      dir = (dir + 1) % 4;
    }
  }

  return (x === 0 && y === 0) || dir !== 0
}

// console.log(isBoundedRobot('GGLLGG'))
// console.log(isBoundedRobot('GGLLGL'))
// console.log(isBoundedRobot('GGLLLL'))
