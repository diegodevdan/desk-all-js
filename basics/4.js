// 4. Write a JavaScript program to reverse a given string.

function  reverseString (str){
    return str.split(' ').reverse().join(' ')
}

console.log(reverseString('Hola Mundo'))