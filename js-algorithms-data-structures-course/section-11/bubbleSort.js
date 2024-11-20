
//O(n square)
function bubbleSort(arr=[]){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[j]
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

// console.log(bubbleSort([5,3,4,1,2]))

//O(n square)
function bubbleSortOptimized(arr=[]){
    for (let i = arr.length; i > 0 ; i--) {
        for (let j = 0; j < i-1; j++) {
            let temp = arr[j]
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSortOptimized([5,3,4,1,2]))

//O(n square) + almost O(n)
function bubbleSortOptimizedBest(arr=[]){
    let noSwap = true
    for (let i = arr.length; i > 0 ; i--) {
        for (let j = 0; j < i-1; j++) {
            let temp = arr[j]
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwap = false
            }
        }
        if(noSwap) break
    }

    return arr
}

// console.log(bubbleSortOptimizedBest([5,3,4,1,2]))
