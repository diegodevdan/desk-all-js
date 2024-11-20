// Implement a function
// to reverse a string without using the built-in reverse() method.

function imperativeReverseString(str){
    let reverse;

    for (let i = str.length; i >= 0 ; i--) {
        if(reverse === undefined){
            reverse = str[i];
            continue;
        }

        reverse = reverse.concat(str[i]);
    }

    return reverse
}

console.log(imperativeReverseString('federico'));