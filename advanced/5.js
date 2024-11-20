// 5. Implement a function that takes two sorted arrays and merges
// them into a single sorted array without using any built-in sorting functions.

function mergeArrays(...args){
    const [arr1, arr2] = args;
    const mergedArrays = [...arr1, ...arr2];
    const sortedArray = mergedArrays.sort((a,b) => a-b)
    return sortedArray;
}




let arr1 = [1,3,8,5,6];
let arr2 = [10,6,4,9,9,17]
console.log(mergeArrays(arr1, arr2))
