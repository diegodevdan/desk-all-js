
function FizzBuzz(num=0){
    if(num === 0) return 'Set a valid number';

    for (let i = 1; i <= num; i++) {
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log('Fizz Buzz');
        } else if(i % 3 === 0){
            console.log('Fizz')
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else console.log(i)
    }

}

console.log(FizzBuzz(20))