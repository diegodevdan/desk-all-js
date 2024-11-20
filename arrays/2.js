// 2. Implement a function that finds the maximum number in an array.


function maxNumber (arr = []){


    let maxNum = Math.max(...arr)

    console.log(maxNum)
}

function minNumber (arr = []){

    let minNum = Math.min (...arr)
    console.log(minNum)
}

let arr = [1, 4, 6, -8, 9, 12, 28, 30]

maxNumber(arr)

minNumber(arr)