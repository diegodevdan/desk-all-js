// 2. Write a JavaScript program to find the maximum number in an array.

function maxNumberInArray(arr:number[]):number{
    return Math.max(...arr);
}


let arr:number[] = [1,10,5,9,7,15,55,3,4,9,8,105,80,75,4,-1]

console.log(maxNumberInArray(arr))
