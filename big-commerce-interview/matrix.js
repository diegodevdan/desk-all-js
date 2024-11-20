// Sum of All Elements in a Matrix
// Description: Write a function to find the sum of all elements in a 2D matrix.
//     Input: A 2D array of integers.
//     Output: The sum of all integers in the matrix.

function sumMatrix(matrix=[]){
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j])
      sum+= matrix[i][j];
    }
  }

  return sum;
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(sumMatrix(matrix))

// ================================================================================
// Transpose of a Matrix
// Description: Given a matrix, write a function to return its transpose.
// The transpose of a matrix is obtained by swapping the rows and columns.
//     Input: A 2D array of integers.
//     Output: The transpose of the input matrix.

function transposeArray(matrix=[]){
  const newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if(!newMatrix[j])
          newMatrix[j] = []

      newMatrix[j][i] = matrix[i][j]
    }
  }

  return newMatrix;
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
//
// console.log(transposeArray(matrix))


//     . Diagonal Sum of a Matrix
// Description: Write a function to find the sum of the primary diagonal elements of a square matrix.
//     Input: A square 2D array of integers.
//     Output: The sum of the primary diagonal elements.

function sumDiagonalMatrix(matrix=[]){
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(i === j){
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
//
// const matrixSquare = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10 ,11, 12],
//   [13, 14 ,15, 16],
// ];
//
// console.log(sumDiagonalMatrix(matrix));
// // Output: 15 (1 + 5 + 9)
// console.log(sumDiagonalMatrix(matrixSquare));

// Maximum Element in a Matrix
// Description: Write a function to find the maximum element in a 2D matrix.
//     Input: A 2D array of integers.
//     Output: The maximum value in the matrix.

function findMaximumElement(matrix=[]){
  return Math.max(...matrix.flat(1))
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(findMaximumElement(matrix))


// // Output: 9

// Search a 2D Matrix
// Description: Given a 2D matrix and a target value, write a function
// to check if the target value exists in the matrix.
//     Input: A 2D array of integers and a target value.
//     Output: A boolean value indicating whether the target is present in the matrix.
//     Example:


function findTarget(matrix=[],target=0){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j])
      if(target===matrix[i][j]) return true
    }
  }

  return false;
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// const target = 5;
// console.log(findTarget(matrix, target));


// Rotate a Matrix by 90 Degrees
// Description: Write a function to rotate a matrix by 90 degrees clockwise.
//     Input: A 2D array of integers.
//     Output: The rotated matrix.

function rotate90Matrix(matrix=[]){
  let newMatrix = [];
  let n = matrix.length

  for (let i = 0; i < n; i++) {
    newMatrix[i] = []
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][n - 1 - i] = matrix[i][j]
    }
  }

  return newMatrix;
}

// const matrix = [
//   [1, 2],
//   [3, 4]
// ];
//
// console.log(rotate90Matrix(matrix))


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]


// Find the Row with the Maximum Sum
// Description: Write a function to find the row in a 2D matrix that has the maximum sum.
//     Input: A 2D array of integers.
//     Output: The index of the row with the maximum sum.
//     Example:

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Output: 2 (The third row has the maximum sum of 24)

function maxRowSum(matrix){
  let biggestSum = 0

  for (let i = 0; i < matrix.length; i++) {
    let tempSum = matrix[i].reduce((a,b) => a+b, 0);
    if(biggestSum < tempSum)
      biggestSum = tempSum;
  }

  return biggestSum;
}

// console.log(maxRowSum(matrix));


// Count Negative Numbers in a Sorted Matrix
// Description: Given a matrix sorted in non-increasing order both row-wise and column-wise,
// write a function to count the number of negative numbers in the matrix.
//     Input: A 2D array of integers.
//     Output: The number of negative numbers in the matrix.
//     Example:

const matrix = [
  [-3, -2, -1, 1],
  [-2, 2, 3, 4],
  [4, 5, 7, 8]
];
// Output: 3

function countNegativeNumbers(matrix=[]){
  let counter = 0;
  for (const arr of matrix) {
    for (const element of arr) {
      if(element < 0)
        counter++
    }
  }

  return counter;
}

console.log(countNegativeNumbers(matrix))
