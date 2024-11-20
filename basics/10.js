// 10. Write a JavaScript program to convert a string to
// title case (capitalize the first letter of each word).

function upperCaseWords(phrase=''){
    let arr = phrase.split(' ');
    let finalPhrase = '';

    let upperCaseLetter = arr.map(el => {
        el = el.charAt(0).toUpperCase() + el.substring(1);
        finalPhrase = finalPhrase + ' ' + el;
    })

    return finalPhrase;
}

console.log(upperCaseWords('anita lava la tina'));
facto