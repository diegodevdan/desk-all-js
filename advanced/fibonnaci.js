

function fibonnaci(seq){
    let prev = 0;
    let current = 1;
    let sum = 0;
    let arr = []

    for (let i = 1; i <= seq; i++) {
        console.log(sum)
        sum =+ current + prev;
        arr.push(sum)
        prev = current;
        current = sum;
    }

    return arr;
}

console.log(fibonnaci(7))

function fibonacciRecursive(seq){
    if(seq === 0){
        return 0
    }

    if(seq === 1){
        return 1
    }

    return seq + fibonacciRecursive(seq-2)
}

console.log(fibonacciRecursive(7))