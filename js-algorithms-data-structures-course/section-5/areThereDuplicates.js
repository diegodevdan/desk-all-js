
function areThereDuplicates(...args){
    let obj = {};
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        obj[arg] = obj[arg] ? obj[arg]+1 : 1
        if(obj[arg] > 1) return true
    }
    return false
}

console.log(areThereDuplicates(1,2,3,4,5,5,5))
console.log(areThereDuplicates(1,2,3,4,5))
console.log(areThereDuplicates('a','b','c','d','e'))
console.log(areThereDuplicates('a','b','c','d','e','b'))