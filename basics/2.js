// 2. Write a JavaScript program to find the maximum number in an array.

function maxNumberInArray(arr){
    return Math.max(...arr);
}

function maxNumberInArrayImperative(arr) {
    if (!Array.isArray(arr))
        return 'El valor no es un array'


    let max;

    for (let i = 0; i < arr.length; i++) {
        max=arr[i];
        for (let j = 0; j < arr.length; j++) {
            if(max <= arr[j])
                max=arr[j];
        }
    }

    return max;
}

// console.log(maxNumberInArray([1,10,5,9,7]))
// console.log(maxNumberInArrayImperative('s'))
console.log(maxNumberInArrayImperative([1,10,5,9,7,15,55,3,4,9,8,105,80,75,4,-1]))
