
function outerFunction(param1){
    let var1= 'var1'
    function innerFunction(param2){
        let var2= 'var2'
        console.log(param1)
        console.log(param2)
        console.log(var1)
        console.log(var2)
    }

    innerFunction(2)
}

console.log(outerFunction(1))