function sameFrequency(num1=0,num2=0){
    let obj = {};

    for (let i = 0; i < num1.toString().length; i++) {
        let num = num1.toString()[i]
        obj[num] = obj[num] ? obj[num]+1 : 1
    }

    console.log(obj)

    for (let i = 0; i < num2.toString().length; i++) {
        let num = num2.toString()[i]
        if(obj[num])
            obj[num]--
        else
            return false
    }

    for (const objKey in obj) {
       if(obj[objKey] !== 0) return false
    }
    return true
}



console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))
