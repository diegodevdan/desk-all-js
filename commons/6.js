// 6. Write a function that determines if a given number is prime or not.
function isPrime(num) {

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) return false;

    }

    return true;

}