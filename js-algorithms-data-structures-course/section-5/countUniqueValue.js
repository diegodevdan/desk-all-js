
function countUniqueValues(arr=[]){
    let result = 0;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
        }
    }

    return i+1
}

const arr = [1,1,1,2,2,3,4,5,5,6,6,6]

console.log(countUniqueValues(arr))