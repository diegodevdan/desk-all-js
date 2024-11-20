
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

//console.log(bubbleSort([3,2,4,1,5,7]))

function bubbleSort2(arr=[]){
    for (let i = arr.length; i >0; i--) {
        for (let j = 0; j < i; j++) {
            let temp = arr[j]
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

//console.log(bubbleSort2([3,2,4,1,5,7]))


function selectionSort(arr=[]){
    let lowest;
    for (let i = 0; i < arr.length; i++) {
        lowest = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]){
                console.log(`${arr[j]} es less than ${lowest}`)
                lowest = j
            }
        }

        if(arr[i] !== arr[lowest]){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }

        console.log(arr)
    }

    return arr
}

//console.log(selectionSort([2,6,1,3,20,10,5,4]))

function insertionSort(arr=[]){
    if(arr.length === 0 || arr.length === 1) return arr;

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (var j = i-1; j >= 0 && arr[j] > temp ; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp
    }

    return arr
}

//console.log(insertionSort([4,2,7,1,3]))

function subArray(arr1, arr2){
    let hash = {}
    arr1.forEach(el => {
        hash[el] = true
    })
    console.log(hash)
    let isSubset = false
    for (const num of arr2) {
        if(hash[num]) isSubset = true
        else isSubset = false
    }

    return isSubset
}

//console.log(subArray([1,2,3,4], [1,3,5]))

function consecutiveSum(low,high){
    if(high === low) return 1;
    return high+(consecutiveSum(low,high-1))
}

//console.log(consecutiveSum(1,10))

function capitalEveryOther(str=''){
    let temp = []
    for (let i = 0; i < str.length; i++) {

        if(i%2 === 0) {
            temp.push(str[i].toUpperCase())
        } else
            temp.push(str[i])
    }
    return temp.join('');
}

console.log(capitalEveryOther('Hello worlD'))
console.log("====================================")

function isAnagram(str1,str2){

    let hashPalindrome = {
    };

    for (let i = 0; i <= str1.length; i++) {
        hashPalindrome[str1[i]] = true
    }

    for (let i = 0; i < str1.length; i++) {
        console.log(hashPalindrome)
        if(!hashPalindrome[str1[i]])
            return false

    }

    return true;
}

console.log(isAnagram("oso", "oso"))