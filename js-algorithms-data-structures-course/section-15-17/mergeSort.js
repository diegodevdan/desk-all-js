//n log n: This means that the time complexity of the algorithm increases linearly
// with the input size n, but also has a logarithmic factor. Essentially, it's faster than O(n^2)
// (quadratic time) but slower than O(n) (linear time) or O(log n) (logarithmic time).
// Merge Sort: In merge sort, the list is repeatedly divided in half (logarithmic part),
// and then each of these halves is sorted and merged back together (linear part).
function merge(arr1=[], arr2=[]){
    let result=[]
    let i=0;
    let j=0;

    while (j < arr2.length && i < arr1.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i<arr1.length){
        result.push(arr1[i])
        i++
    }

    while (j<arr2.length){
        result.push(arr2[j])
        j++
    }

    return result;
}

// console.log(merge([1,10,50],[2,14,99,100]))



function mergeSort(arr){
    if(arr.length <=1) return arr

    let leftHalf = mergeSort(arr.slice(0, Math.floor(arr.length)/2));
    let rightHalf = mergeSort(arr.slice(leftHalf.length))
    return mergeCourse(leftHalf, rightHalf)
}

console.log(mergeSort([1,10,50,2,14,99,100]))

function mergeCourse(arr1, arr2){
    let result=[]
    let i=0;
    let j=0;

    while (j < arr2.length && i < arr1.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i<arr1.length){
        result.push(arr1[i])
        i++
    }

    while (j<arr2.length){
        result.push(arr2[j])
        j++
    }

    return result;
}

// console.log(mergeCourse([1,10,50],[2,14,99,100]))
