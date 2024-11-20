

function factorial(num){
    let sum = 0;
    let res = 0;

    for (let i = num; i >= 1 ; i--) {
        if(sum === 0){
            res = i * (i-1);
            sum = res;
        } else {
            if(i === 1){
                continue;
            }
            res = sum * (i-1);
            sum = res;
        }
    }

    return sum;
}

function factorialRecursive(num){
    if((num === 1) || (num === 0)) return 1;

    return num * factorialRecursive(num-1)
}

console.log(factorial(7))
console.log(factorialRecursive(7))