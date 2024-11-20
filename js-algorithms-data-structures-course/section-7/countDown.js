
function countDown(num=0){
    if(num <= 0){
        console.log('All done')
        return
    }

    console.log(num)
    return countDown(num-1)
}

console.log(countDown(5))