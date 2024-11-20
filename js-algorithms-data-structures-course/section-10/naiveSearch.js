
function naiveSearchString(str, strToFind){
    let matches = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strToFind.length; j++) {
            if(strToFind[j] !== str[i+j]) break
            if(j === strToFind.length -1) matches++
        }
    }

    return matches
}

console.log(naiveSearchString('holandirir', 'ir'))