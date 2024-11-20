// Given an integer array, move all elements that are 0 to the left
// while maintaining the order of other elements in the array.The array has to be
// modified in-place. Try it yourself before reviewing the solution and explanation.

function sortArrayWith0(arr=[]){
    let arr0s = arr.filter(el => el === 0);
    let arrOthers = arr.filter(el => el !== 0);
    let resp = [arr0s, arrOthers];
    return resp.flat();
}

function sortArrayWith0Imp(arr=[]){
    if(!Array.isArray(arr)) return 'In not an arros';

    let arr0s = [];
    let arrNonZeroes = [];

    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "number") continue;
        if(arr[i] === 0){
            arr0s.push(arr[i]);
        } else
            arrNonZeroes.push(arr[i]);
    }

    return [...arr0s, ...arrNonZeroes];
}

let arr = [99,0,0,-4,0,1,2,5,5,6,77,7,3,0,0,3,5,0,2,8,0,'s','a','5','pinche veto me cagas'];
// console.log(sortArrayWith0(arr))
console.log(sortArrayWith0Imp(arr))