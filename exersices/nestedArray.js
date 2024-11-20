

function diagonalDifference(arr=[]) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let flatedArr = arr.flat();
    let countLeft = 0;
    let countRight= arr.length - 1;

    for (let i = 0; i < flatedArr.length; i++) {
        if(!flatedArr[countLeft]) break

        leftDiagonal += flatedArr[countLeft];
        rightDiagonal += flatedArr[countRight];
        countLeft += arr.length +1;
        countRight += arr.length -1;
    }

    console.log(leftDiagonal, rightDiagonal)
    return Math.abs(leftDiagonal - rightDiagonal)
}

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
const arr2 = [ [1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25]]

// console.log(diagonalDifference(arr))
// console.log(diagonalDifference(arr2))


//corrected
function diagonalDifference2(arr = []) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][size - 1 - i];
    }

    console.log(leftDiagonal, rightDiagonal);
    return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference2(arr))
console.log(diagonalDifference2(arr2))

