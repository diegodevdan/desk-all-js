/*

We are developing a new board game, Thrilling Teleporters.

The board consists of consecutive squares from 0 to last_square, some of the spaces
also contain Teleporters, which are given as comma delimited strings "from,to".

The game is played as follows:
  1. Each turn, the player rolls a die numbered from 1 to die_sides.
  2. The player moves forward the rolled number of squares.
  3. The player stops at last_square if they reach it.
  4. If the player finishes on a square with a teleporter, they are moved to where the
   teleporter points.

Note: Only one teleporter is followed per turn.

A sample board with last_square 20 the following teleporters might look like this conceptually.
teleporters1 = ["3,1", "4,2", "5,10"]

   +-----+
   v     |
0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20
      ^     |  |               ^
      +-----+  +---------------+

Write a function that returns a collection of the possible squares a player can move
to in a single turn, given the following inputs:
- A collection of teleporter strings
- The number of sides on the die
- The square the player starts on
- The last square on the board

Example:
With a 6-sided die, starting at square 0 with a board ending at square 20 (as pictured above)

Rolling a 1, 2 or 6 have no teleporters so they end at that square.
Rolling a 3 goes to 1, rolling a 4 goes to 2, rolling a 5 goes to 10.
The possible outcomes are, in order of die roll, are [1, 2, 1, 2, 10, 6].
If we remove the duplicates, the answer is [1, 2, 10, 6]
destinations(teleporters1, 6, 0, 20) => [1, 2, 10, 6]

Additional Inputs:
teleporters2 = ["5,10", "6,22", "39,40", "40,49", "47,29"]
teleporters3 = ["6,18", "36,26", "41,21", "49,55", "54,52",
                "71,58", "74,77", "78,76", "80,73", "92,85"]
teleporters4 = ["97,93", "99,81", "36,33", "92,59", "17,3",
                "82,75", "4,1", "84,79", "54,4", "88,53",
                "91,37", "60,57", "61,7", "62,51", "31,19"]
teleporters5 = ["3,8", "8,9", "9,3"]

Complexity Variable:
B = size of the board
Note: The number of teleporters, T, and the size of the die, D, are bounded by B.

All Test Cases:
(output can be in any order)
                           die  start  last
                          sides, pos, square
destinations(teleporters1,  6,    0,    20)  => [1, 2, 10, 6]
destinations(teleporters2,  6,   46,   100)  => [48, 49, 50, 51, 52, 29]
destinations(teleporters2, 10,    0,    50)  => [1, 2, 3, 4, 7, 8, 9, 10, 22]
destinations(teleporters3, 10,   95,   100)  => [96, 97, 98, 99, 100]
destinations(teleporters3, 10,   70,   100)  => [72, 73, 75, 76, 77, 79, 58]
destinations(teleporters4,  6,    0,   100)  => [1, 2, 3, 5, 6]
destinations(teleporters5,  7,    2,    20)  => [3, 4, 5, 6, 7, 8, 9]

*/

teleporters1 = ["3,1", "4,2", "5,10"];
teleporters2 = ["5,10", "6,22", "39,40", "40,49", "47,29"]
teleporters3 = ["6,18", "36,26", "41,21", "49,55", "54,52",
  "71,58", "74,77", "78,76", "80,73", "92,85"]
teleporters4 = ["97,93", "99,81", "36,33", "92,59", "17,3",
  "82,75", "4,1", "84,79", "54,4", "88,53",
  "91,37", "60,57", "61,7", "62,51", "31,19"]
teleporters5 = ["3,8", "8,9", "9,3"]

// console.log(destinations(teleporters1,  6,    0,    20))
    // [1, 2, 10, 6]
// console.log(destinations(teleporters2,  6,   46,   100))
    // [48, 49, 50, 51, 52, 29]
// destinations(teleporters2, 10,    0,    50)
    // [1, 2, 3, 4, 7, 8, 9, 10, 22]
// destinations(teleporters3, 10,   95,   100)
    // [96, 97, 98, 99, 100]
// destinations(teleporters3, 10,   70,   100)
    // [72, 73, 75, 76, 77, 79, 58]
// destinations(teleporters4,  6,    0,   100)
    // [1, 2, 3, 5, 6]
// destinations(teleporters5,  7,    2,    20)
    // [3, 4, 5, 6, 7, 8, 9]
function destinations(teleporter, die_sides, start_pos, last_square){
  const teleporters = teleporter.map(tel => tel.split(',').map(Number));
  console.log(teleporters)
  let res = new Set();

  for (let i = 1; i <= die_sides; i++) {
    let pos = start_pos + i;

    for (let j = 0; j < teleporters.length; j++) {
      if(pos === teleporters[j][0]){
        pos = teleporters[j][1];
        break;
      }
    }

    if(pos > last_square)
      pos = last_square;

    res.add(pos)
  }

  // return new Set(res);
  return Array.from(res)
}

function destinations2(teleporters, die_sides, start_pos, last_square) {
  // Convert teleporter strings to a Map for easier lookup
  const teleportMap = new Map(teleporters.map(tel => tel.split(',').map(Number)));

  let finalPositions = new Set(); // Use a Set to avoid duplicates

  for (let i = 1; i <= die_sides; i++) {
    let pos = start_pos + i; // Calculate new position based on die roll

    // Check for teleportation
    if (teleportMap.has(pos)) {
      pos = teleportMap.get(pos); // Teleport if applicable
    }

    if (pos > last_square) {
      pos = last_square; // Ensure not beyond last square
    }

    finalPositions.add(pos);
  }

  return Array.from(finalPositions); // Convert Set to Array
}

function destinations3(teleporters, die_sides, start_pos, last_square){
  let telepMap = teleporters.map(tel => tel.split(',').map(el => Number(el)));
  let results = [];
  let isTeleported = false

  for (let i = 1; i <= die_sides; i++) {
    isTeleported = false;
    let pos = start_pos + i;

    for (let j = 0; j < telepMap.length; j++) {
      if(pos === telepMap[j][0]){
        isTeleported = true
        results.push(telepMap[j][1]);
        break;
      }
    }

    if(pos > last_square){
      pos = last_square
    }

    if(!isTeleported){
      results.push(pos)
    }

  }

  let resp = Array.from(new Set(results))
  return resp;
}

// console.log(destinations3(teleporters1,  6,    0,    20))
// console.log(destinations3(teleporters2,  6,   46,   100))


const grid = [
  ["E", "R", "C"],
  ["T,2,1", "E", "S"],
  ["E", "R", "E"]
];

function misteryLand(grid, availableDays=5){

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j])
    }
  }
}

console.log(misteryLand(grid, 5))