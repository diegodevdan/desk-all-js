
//Best case O(1)
//Worst and average case O(loh n)
function binarySearch(arr=[],num=0){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end)/2);

    while (arr[middle] !== num && start <= end){
        console.log(start, middle, end)
        if(num < arr[middle]){
           end = middle - 1
        } else {
            start = middle + 1
        }

        middle = Math.floor((start+end)/2)
    }

    return num === arr[middle] ? middle : -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11],-10))