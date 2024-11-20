
function sum(num=[]){
    console.log(num)
    if(num.length === 0) return 0
    else {
        let head = num[0];
        let tail = num.slice(1, num.length)
        return head + sum(tail)
    }
}

console.log(sum([1,2,3,4,5]))
