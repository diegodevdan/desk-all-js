// Write a JavaScript function
// that returns the Fibonacci sequence up to a given number of terms.

function fibonacci(num){
    if(num === 0)
        return '0'

    if(num === 1) {
        return '1'
    }

    let sequence = [0,1];

    for (let i = 0; i < num ; i++) {
        let sum = sequence[sequence.length - 1] + sequence[sequence.length -2];
        sequence.push(sum);
    }

    return sequence;
}

console.log(fibonacci(4))