//O(N square)
function insertionSort(arr=[]){
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        for (var j = i-1; j >= 0 && arr[j] > current ; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = current
    }

    return arr
}


console.log(insertionSort([5,3,19,47,17,6]))
// [3,5,19,47,17,6]