// 1. Write a JavaScript function to calculate the sum of two numbers.

function sumOfTwoNums(a,b){
    if(!a || !b)
        return 'No has ingresado un valor';

    if(typeof a !== "number" || typeof b !== "number")
        return 'El/los valores ingresados no son numeros'

    return a+b;
}

console.log(sumOfTwoNums(5, 9));