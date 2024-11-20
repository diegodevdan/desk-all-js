
// O(N square)
function selectionSort(arr=[]){

    for (let i = 0; i < arr.length; i++) {
        let min = i

        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(arr[i] !== arr[min]){ // if(i !== min)
            let temp = arr[i];
            arr[i] = arr[min]
            arr[min] = temp
        }

    }

    return arr
}

console.log(selectionSort([5,4,7,9,10,3]))