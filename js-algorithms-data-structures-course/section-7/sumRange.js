

function sumRange(num){
    if(num === 0) return
    if(num === 1) return 1

    return num + sumRange(num-1)
}

console.log(sumRange(3)) //6 -> 3+2+1
console.log(sumRange(4)) //10 -> 4+3+2+1