
function reverseWord(sentence){
    let sentenceArr = sentence.split(' ');
    let resArray = [];

    for (let i = 0; i < sentenceArr.length; i++) {
        let word = sentenceArr[i];
        for (let j = word.length -1; j >=0 ; j--) {
            resArray.push(word[j]);
        }
    }

    return resArray.join(' ');
}

console.log(reverseWord('this is a test'))