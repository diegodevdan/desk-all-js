// 8. Write a JavaScript program to find the largest element in a nested array.

function findLargestNumber(nestedArray){
    let flatArray = nestedArray.flat(2);
    let max;
    //easier
    // return Math.max(...flatArray);

    for (let i = 0; i < flatArray.length; i++) {
        max = flatArray[i];
        for (let j = 0; j < flatArray.length; j++) {
            if(max <= flatArray[j]){
                max = flatArray[j];
            }
        }
    }

    return max;
}

let matrix = [
    [1,2,3],
    [[4,99,12],5,[14,105]],
    [7,[245,77],9]
]

console.log(findLargestNumber(matrix))
