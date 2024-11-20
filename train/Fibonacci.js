
function Fibonacci(seq){
    let sum = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 1; i <= seq ; i++) {
        sum = curr + prev;
        prev = curr;
        curr = sum;
    }

    return sum;
}

function FibonacciRec(seq){
    if (seq === 0){
        return 0;
    }

    if (seq === 1){
        return 1;
    }

    return fibonacciRec(seq-1) + fibonacciRec(seq-2);
}

console.log(Fibonacci(6));