
function averagePair(arr=[], average){
    let p1 = 0;
    let p2 = arr.length -1;

    while (p1 < p2){
        let avg = (arr[p1]+arr[p2])/2
        if(avg === average) return true;
        else if (avg < average){
            p1++
        } else
            p2--
    }

    return false
}

console.log(averagePair([1,2,3],2.5) )
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([],4))