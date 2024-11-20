
function FibonnaciSequence(seq){
    let sum = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 1; i <= seq; i++) {
        console.log(sum);
        sum = curr+prev;
        prev = curr;
        curr = sum;
    }
}

function fibonacciRec(num){
    if(num === 0){
        return 0;
    }

    if (num === 1){
        return 1;
    }

    return fibonacciRec(num -1) + fibonacciRec(num -2)
}

console.log(FibonnaciSequence(6))
console.log(fibonacciRec(6))