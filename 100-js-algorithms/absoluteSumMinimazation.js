
function mediumValue(a=[]){
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length/2 - 1] : a[Math.floor(a.length/2)]
}

console.log(mediumValue([2,3,4,7])) //3
console.log(mediumValue([2,4,7,6,6])) //7
console.log(mediumValue([2,4,7,6,6,8,9])) //6