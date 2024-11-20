const isBoundedRobot = (instructions) => {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let x = 0, y = 0;
  let dir = 0;

  for (let i = 0; i < instructions.length; i++) {
    console.log(instructions[i])
    if(instructions[i] === 'G'){
      x += directions[dir][0]
      y += directions[dir][1]
    } else if (instructions[i] === 'L'){
      dir = (dir + 3) % 4;
    } else if (instructions[i] === 'R'){
      dir = (dir + 1) % 4;
    }
  }
  return (x === 0 && y === 0) || dir !== 0
}

// console.log(isBoundedRobot('GGLLGG'))


const returnToTheOrigin = (instructions) => {
  let x = 0
  let y = 0;

  for (let i = 0; i < instructions.length; i++) {
    if(instructions[i] === 'U')
      y += 1;
    if(instructions[i] === 'D')
      y -= 1;
    if(instructions[i] === 'R')
      x += 1;
    if(instructions[i] === 'L')
      x -= 1;
  }

  console.log(x, y)
  return (x === 0 && y === 0)
}

console.log(returnToTheOrigin("UDLR"))
console.log(returnToTheOrigin("UUDDLLRR"))
console.log(returnToTheOrigin("UUDDLLRD"))
