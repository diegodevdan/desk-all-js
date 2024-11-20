// 8. Given a string, write a function to count the occurrences of each
// character in the string.

function counterCharacter(str){
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]]){
            obj[str[i]] = obj[str[i]]+1;
        } else {
            obj[str[i]] = 1;
        }
    }

    return obj;
}

console.log(counterCharacter('peerroooooo'))