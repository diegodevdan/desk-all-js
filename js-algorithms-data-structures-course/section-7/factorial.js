
function factorial(num=0){
    if(num === 0) return 1;
    if(num === 1) return 1;

    return num * factorial(num-1)
}

console.log(factorial(5))