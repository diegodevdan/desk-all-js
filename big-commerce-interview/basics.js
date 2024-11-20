

function reverseString(str){
  return str.split('').reverse().join('')
}

// console.log(reverseString('hello world'))

function isPalindrome(str){
  const reversedStr = str.replaceAll(' ', '').split('').reverse().join('').toLowerCase();
  return reversedStr === str.replaceAll(' ', '');
}

// console.log(isPalindrome('anita lava la tina'))
// console.log(isPalindrome('ajua'))

function findMax(arr=[]){
  console.log(Math.max(...arr))
  return Math.max(...arr)
}

// console.log(findMax([22,88,99,77,44,105,54,33]))

// Problem: Write a function that prints the numbers from 1 to 100.
// But for multiples of three, print "Fizz" instead of
// the number, and for the multiples of five, print "Buzz".
// For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(){
  for (let i = 1; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0)
      console.log('FizzBuzz ', i)
    else if(i%3 === 0)
      console.log('Fizz ', i)
    else if (i%5 === 0)
      console.log('Buzz ', i)
  }
}

// console.log(fizzBuzz())


// Problem: Write a function to remove duplicates from a sorted array in place.
// Return the length of the array after removing duplicates.

function removeDuplicates(arr=[]){
  return Array.from(new Set([...arr])).length
}

// console.log(removeDuplicates([1,1,1,2,2,3,3,3]))


// Problem: Write a function that
// takes two sorted arrays and merges them into a single sorted array.

function mergeArrays(arr1=[],arr2=[]){
  return Array.from([...arr1, ...arr2]).sort((a,b) => a-b);
}

// console.log(mergeArrays([1,3,5,10], [2,4,6]))

//Problem: Write a function that takes a string and returns
// the count of vowels (a, e, i, o, u) in the string.

function counterVowels(str=''){
  let hashmap = {};
  let vowels = ['a','e','i','o','u']
  // for (let i = 0; i < str.length; i++) {
  //   if(!vowels.includes(str[i])) continue;
  //
  //   if(hashmap[str[i]])
  //     hashmap[str[i]]++
  //   else
  //     hashmap[str[i]] = 1;
  // }

  for (const char of str) {
    if(!vowels.includes(char)) continue;
    if(hashmap[char]){
      hashmap[char]++
    } else {
      hashmap[char] = 1;
    }
  }
  // return hashmap;
  return Object.values(hashmap).reduce((a,b) => a+b,0);
}

// console.log(counterVowels('diiieegoo'))

//Problem: Write a function to find the second
// largest number in an array.

function secondLargest(arr=[]){
  let largest = Math.max(...arr);
  return Math.max(...arr.filter(el => el < largest))
}

// console.log(secondLargest([1,10,7,8,9,11,4]))


//Problem: Write a function that checks if two
// strings are anagrams of each other.

function areAnagrams(str1, str2){
  const formatedStr1 = str1.split('').sort().join('')
  const formatedStr2 = str2.split('').sort().join('')

  return formatedStr1.toLowerCase() === formatedStr2.toLowerCase();
}

// console.log(areAnagrams('listen', 'silent'))

// Problem: Given an array containing n distinct numbers taken
// from 0, 1, 2, ..., n, find the one that is missing from the array.

function missingNumber(arr=[]){
  let missing = undefined
  for (let i = 0; i < arr.length; i++) {
    if(!arr.includes(i))
      missing = i;
  }

  return missing;
}

// console.log(missingNumber([3,0,1]))

function isArraySorted(arr=[]){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i+1])
      return false;
  }

  // for (const element of arr) {
  //   if(element > arr[arr.indexOf(element)+1])
  //     return false
  // }
  return true;
}

// console.log(isArraySorted([4,3,2,1]))
// console.log(isArraySorted([1,2,3,4]))

// function processArray(arr) {
//   let i = 0;
//
//   while (i < arr.length) {
//     if (arr[i] > 0) {
//       let accumulator = arr[i];
//       arr[i] = 0;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > 0) {
//           arr[j] -= accumul-ator;
//           if (arr[j] >= 0) {
//             accumulator = 0;
//             break;
//           } else {
//             accumulator = Math.abs(arr[j]);
//             arr[j] = 0;
//           }
//         }
//       }
//     }
//     i++;
//   }
//
//   return arr;
// }
//
// // Example usage:
// let arr = [3, 4, 2, 1, 5];
// console.log(processArray(arr)); // Output: [0, 1, 0, 0, 0]