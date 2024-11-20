// 7. Write a JavaScript function to check if a given number is prime.

function isNumberPrime(primeNumber){
    let piv = primeNumber;
    for (let i = primeNumber; i > 0 ; i--) {
        if(primeNumber % i !== 0){
            return ''
        }
        piv-=primeNumber-1
    }
}

console.log(isNumberPrime(4))