// 5. Write a JavaScript function that takes an array of
// numbers and returns a new array with only the even numbers.

function evenNumbers(arr){
    return arr.filter(el => el%2 === 0)
}

function evenNumbersImperative(arr){
    let evenArray = [];

    for (let i = 0; i < arr.length; i++) {
        if((arr[i] % 2) === 0){
            evenArray.push(arr[i])
        }
    }

    return evenArray;
}

// console.log(evenNumbers([1,2,3,4,5,6,7,8,9,10,11]))
console.log(evenNumbersImperative([1,2,3,4,5,6,7,8,9,10,11]))