// Given an array of numbers, write a function to find the largest
// and smallest numbers in the array.

function findLargestNum(arr=[]){
    let maxNum;

    for (let i = 0; i < arr.length; i++) {
        maxNum=arr[i];
        for (let j = 0; j < arr.length; j++) {
            if(maxNum <= arr[j])
                maxNum = arr[j];
        }
    }

    return maxNum;
}

function findLowestNum(arr=[]){
    let minNum

    for(let i = 0; i <arr.length; i++){
        minNum= arr[i];
        for(let j  = 0 ; j <arr.length; j++){
            if(minNum >= arr[j])
                minNum= arr[j]
        }

    }

    return minNum
}

function arrayOperations(arr=[]){
    const maxNumber = findLargestNum(arr);
    console.log(maxNumber)
    const minNumber = findLowestNum(arr);
    console.log(minNumber)
}

let arr = [1,2,3,4,88,55,33,-12,43,-23];
console.log(arrayOperations(arr));

