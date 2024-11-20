// Write a function that reverses the order of words in a sentence without
// using the built-in reverse() method.

function reverseSentence(sentence = ''){
    let splitSentence = sentence.split(' ');
    let reversedSentence = '';
    for (let i = splitSentence.length -1; i >= 0 ; i--) {
        reversedSentence = reversedSentence + ' ' + splitSentence[i];
    }

    return reversedSentence;

}

console.log(reverseSentence('el rio corre a gran velocidad'))