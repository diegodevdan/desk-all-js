// 9. Write a function that determine0s if two strings are anagrams of each other

function isAnagram(word1, word2){
    let word1Spread = word1.split('').sort();
    let word2Spread = word2.split('').sort()

    if(word1Spread.length !== word2Spread.length){
        return 'Is not an anagram'
    }

    for (let i = 0; i < word1Spread.length; i++) {
        if(word1Spread[i] !== word2Spread[i]){
            return 'Is not an anagram';
            break;
        }
    }

    return 'Is an anagram'
}

console.log(isAnagram('ansa', 'nasa'))