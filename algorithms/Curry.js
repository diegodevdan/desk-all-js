

//no currying
function addNumbers(a,b){
    return a+b;
}

function addNumberCurrying(a){
    return function addB(b){
        return a+b;
    }
}

const addNumber = addNumberCurrying(5);
const result = addNumber(3)
console.log(result)




function addNumbers(num1){
    return (num2) => {
        return  num1+num2;
    }
}

console.log(addNumbers(20)(20))
