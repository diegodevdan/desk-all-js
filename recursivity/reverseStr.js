
function reverseStr(str){
    if(str.length === 0 || str.length === 1) return true
    else {
        let head = str[0];
        let middle = str.substring(1, str.length -1)
        let last = str[str.length -1]
        return head === last && reverseStr(middle)
    }
}

console.log(reverseStr('racecar'))