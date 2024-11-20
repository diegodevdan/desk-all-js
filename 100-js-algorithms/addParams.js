function add(p1=0,p2=0){
    return p1+p2
}


console.log(add(1,2))
console.log(add(3,2))
console.log('===========')
console.log(add2(3,2,5,6,7))

function add2(...params){
    let total = 0
    for (const num of params) {
        total+=num
    }
    return total;
}
