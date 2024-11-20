
function CaesarCipher(sentence, num){
    const lowerSentence = sentence.toLowerCase().split('');
    let newArray = [];

    const alphabetLowercase = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    for (let i = 0; i < lowerSentence.length; i++) {
        const newLetterIndex = alphabetLowercase.findIndex(el => el === lowerSentence[i]);

        if(newLetterIndex === 25)
            newArray.push(alphabetLowercase[0])
        else if(newLetterIndex === 26)
            newArray.push(alphabetLowercase[1])
        else
            newArray.push(alphabetLowercase[newLetterIndex+num])
    }

    return newArray.join('');
}

console.log(CaesarCipher('hello world z y', 3))