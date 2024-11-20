//4. Write a function that takes an array of integers as input and
// returns a new array with only the unique elements.

function uniqueValues(arr=[]){
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if(newArray.includes(arr[i])){
            continue;
        } else {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

function uniqueValuesSet(arr=[]) {
    return new Set(arr);
}

let arr = [1,1,2,2,3,3,3,3,4,5,6,6,6,7,7,8,8,9,9,9,9,10]
console.log(uniqueValues(arr))
console.log(uniqueValuesSet(arr))