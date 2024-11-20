// 1. Write a function that returns the sum of all numbers in an array.


function sumArrayNumbers(arr:number[]):number{
    return arr.reduce((prev,current) => prev + current,0);
}

const arr:number[] = [1,2,3,4,5,6,7,8,9];

console.log(sumArrayNumbers(arr))