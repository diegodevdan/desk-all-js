
// function reverseString(str){
//   return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'))

function reverseString(str){
  let reversed = '';
  // for (let i = str.length-1; i >= 0; i--) {
  //   reversed += str[i]
  // }

  for (const char of str) {
    reversed = char + reversed
  }

  return reversed;
}
// console.log(reverseString('hello'))


function reverseInteger(int=0){
  return int.toString().split('').reverse().join('')
}

// console.log(reverseInteger('9876'))


// ==========================================================
function maxCharacter(str){
  let hash = {}

  for (const char of str) {
    if(hash[char])
      hash[char]++
    else
      hash[char] = 1
  }

  let max = Math.max(...Object.values(hash));

  for (const [key, value] of Object.entries(hash)) {
    if(hash[key] === max)
      return `${key}: ${value}`
  }
}

// console.log(maxCharacter('diegoeslaleeey'))
// console.log(maxCharacter('aasadhajhdjasadas'))



// ============================================================

function chunk(arr=[], groupBy=0){
  let result = []
  let idx = 0;

  while(idx <arr.length){
    result.push(arr.slice(idx, idx+groupBy));
    idx += groupBy;
  }

  return result;
}

// console.log(chunk([1,2,3,4],2));
// console.log(chunk([1,2,3,4,5],2));
// console.log(chunk([1,2,3,4,5,6,7,8],3));
// console.log(chunk([1,2,3,4,5],4));
// console.log(chunk([1,2,3,4,5],10));


// ================================================================

function capitalize(str){
  return str.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' ')
}

// console.log(capitalize('diego salvador herrera chairez'))

// ==========================================================================

function steps(n=0){
  let sharp = '#'
  let idx= 0;

  while (idx < n) {
    idx++;
    console.log(sharp);
    sharp += '#';
  }

}

// console.log(steps(3))
// console.log(steps(4))
// console.log(steps(5))

// =====================================================================================

// function pyramid(n=0){
//   for (let i = 0; i < n; i++) {
//     let space = '';
//     for (let j = 0; j < ; j++) {
//
//     }
//   }
// }

// console.log(pyramid(3))