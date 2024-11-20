// Write a JavaScript program to calculate the factorial of a given number.


function calculateFactorial(num){
    let result= num;

    for (let i = num -1; i > 0; i--) {
        result *= i;
        console.log(result)
    }

    return result;
}

function calculateFactorialWhile(num){
    let result = num;
    let condition = num - 1;

    while (condition > 0){
        result *= condition;
        condition--;
    }

    return result;
}

// console.log(calculateFactorial(5))
// console.log(calculateFactorial(10))
console.log(calculateFactorialWhile(5))