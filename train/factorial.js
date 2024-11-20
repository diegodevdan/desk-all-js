
function Factorial(num){
    let sum=0;
    let res=0;

    for (let i = num; i > 1 ; i--) {
        if(sum === 0){
            res = num * (i-1);
            sum =  res;
        } else {
            if(i === 0) return;
            res = sum * (i-1);
            sum = res
        }
    }

    return sum;
}

function FactorialRec(num){
    if(num === 0 || num === 1) return 1;

    return num * FactorialRec(num-1);
}


console.log(Factorial(5))
console.log(FactorialRec(5))