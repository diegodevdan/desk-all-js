// 1. Write a JavaScript function to calculate the sum of two numbers.

interface SumOfTwoNumsProps{
    a: number,
    b: number
}

function sumOfTwoNums({a, b}:SumOfTwoNumsProps):number{
    return a+b;
}

console.log(sumOfTwoNums({a: 2, b:2}));