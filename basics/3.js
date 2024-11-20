// 3. Write a JavaScript function to check
// if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str){
    if(typeof str !== "string")
        return 'El valor ingresado no es un string'

    let strToCompare = str.split(' ').join('')
    let reverseStr = strToCompare.split('').reverse().join('')


    return strToCompare === reverseStr ? 'Si es palindromo' : 'No es palindromo'
}

console.log(isPalindrome(1));
console.log(isPalindrome('anita lava la tina'));