

function reverse(word){
    if(word.length === 1) return word;
    return word.substring(word.length-1).concat(reverse(word.substring(0, word.length-1)))
}

console.log(reverse('hello'))
console.log(reverse('awesome'))
console.log(reverse('rithmschool'))