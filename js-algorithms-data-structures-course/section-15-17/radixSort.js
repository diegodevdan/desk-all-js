

function radixSort(arr=[]){
    let maxDigits  = mostDigits(arr)
    for (let k = 0; k < maxDigits ; k++) {
        let digitBuckets = Array.from({length: 9}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i],k)
            digitBuckets[digit].push(arr[i])
        }
        console.log(digitBuckets)
        arr=[].concat(...digitBuckets)
    }

    return arr;
}

function getDigit(num,place){
    let strNum =num.toString();
    if(strNum[strNum.length-1-place] === undefined) return 0
    return Number(strNum[strNum.length-1-place])
}

function digitCount(num){
    if(num === 0) return 1
    return Number(num.toString().length)
}

function mostDigits(nums){
    let highest = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[highest] < nums[i]){
            highest = i
        }
    }
    return digitCount(nums[highest])
}


// console.log(getDigit(12345,0))
// console.log(getDigit(12345,1))
// console.log(getDigit(12345,2))
// console.log(getDigit(12345,3))
// console.log(getDigit(12345,4))
// console.log(getDigit(12345,5))
//
// console.log(digitCount(1))
// console.log(digitCount(0))

// console.log(mostDigits([1,1,11111,1]))
// console.log(mostDigits([4532,466,87,642,633]))
// console.log(mostDigits([1,1,35,79]))

console.log(radixSort([4532,466,87,642,633]))