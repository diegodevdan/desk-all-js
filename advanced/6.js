

function factorialRecursion(number){
    if(number === 1 || number === 0) return "1";

    return number * factorialRecursion(number-1)

}

console.log(factorialRecursion(5));



function counter(value){
    let count = value;
     function inner() {
        return count+1;
    }

    return inner()
}

console.log(counter(20));