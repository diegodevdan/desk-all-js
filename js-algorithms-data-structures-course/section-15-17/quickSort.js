

function quickSort(arr=[], left = 0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }

    return arr
}

function pivot(arr=[], startIndex=0, endIndex=arr.length-1){
    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }

    var piv = arr[startIndex];
    var swapIndex = startIndex;
    for (let i = startIndex+1; i < arr.length; i++) {
        if(piv > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr,startIndex,swapIndex)
    return swapIndex;
}

console.log(quickSort([5,2,1,8,4,7,6,3]))