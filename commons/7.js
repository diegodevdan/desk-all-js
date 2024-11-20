// 7. Implement a function to find the sum of all the numbers in an array.

function sumArrayNumbers(arr=[]){
    let sum = 0;
    for (const element of arr) {
        if(typeof element !== "number"){
            continue;
        }

        sum += element;
    }

    return sum;
}

let arr = [1,2,3,4,'2','ef'];

console.log(sumArrayNumbers(arr));