//Anagram

function validAnagram(str1,str2){
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    if(str1.length !== str2.length) return false;
    return sortedStr1 === sortedStr2;


}

console.log(validAnagram('anagvram', 'nagfaram'))

function validAnagram2(str1,str2){
    let obj = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        obj[letter] =  obj[letter] ? obj[letter]+1 : obj[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if(!obj[letter])
            return false;
        else
            obj[letter]--;
    }
    console.log(obj)
    return true
}

console.log(validAnagram2('anagram', 'nagaram'))
