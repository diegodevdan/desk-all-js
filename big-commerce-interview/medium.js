// Problem: Given an array of integers and a target sum,
// write a function to find two numbers in the array
// that add up to the target sum. Return their indices.

function twoSum(arr, sum){
  const idx = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[i]+arr[j] === sum){
        idx.push(i)
        idx.push(j)
        return idx;
      }
    }
  }
}

// console.log(twoSum([11,19,5,7,8,6], 11))
// console.log(twoSum([2, 7, 11, 15], 9))

// Problem: Write a function to find the length of
// the longest substring without repeating characters.

function lengthOfLongestSubstring(str){
  let substr = '';
  for (let i = 0; i < str.length; i++) {
    if(substr.includes(str[i]))
      return substr
    else
      substr += str[i];
  }
}

// console.log(lengthOfLongestSubstring('abcadefg'))
// console.log(lengthOfLongestSubstring('abcdee'))
// console.log(lengthOfLongestSubstring('aaa'))

// Problem: Write a function that takes an
// array of strings and groups anagrams together.

function groupAnagrams(arr=[]){
  let groups = {};

  for (let word of arr) {
    let formatedWord = word.split('').sort().join('');
    if(groups[formatedWord])
      groups[formatedWord].push(word)
    else
      groups[formatedWord] = [word]
  }

  return Object.values(groups)
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

// Problem: Write a function that takes a string and returns
// the first non-repeating character. If there is none, return null.

function firstNonRepeatingChar(str=''){
  let hash = {}
  for (const strElement of str) {
    if(hash[strElement])
      return strElement;
    else
      hash[strElement] = 1
  }

  return null;
}

// console.log(firstNonRepeatingChar('swiss'))
// console.log(firstNonRepeatingChar('cara'))


// Problem: Given a string containing just the characters
// '(', ')', '{', '}', '[', and ']', determine if the
// input string is valid. An input string is valid if:
// Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.

function areValidParentheses(str){
  let stack = [];
  let map = {
    '(':')',
    '[':']',
    '{':'}',
  }

  for (let i = 0; i < str.length; i++) {
    if(map[str[i]]){
      stack.push(str[i])
    } else if(str[i] === ')' || str[i] === ']' || str[i] === '}'){
      if(map[stack.pop() !== str[i]]){
        return false;
      }
    }
  }

  console.log('stack: ', stack)
  return stack.length <= 0
}

function areValidParentheses2(str=''){
  let stack = [];
  let map = {
    '(':')',
    '[':']',
    '{':'}',
  }

  for (const char of str) {
    if(map[char]){
      stack.push(char)
    } else if(char === ')' || char === ']' || char === '}'){
      if(map[stack.pop()] !== char)
        return false
    }
  }

  return stack.length === 0;
}

// console.log(areValidParentheses('(){}[]'))
// console.log(areValidParentheses('(){}[]('))

// console.log(areValidParentheses2('(){}[]'))
// console.log(areValidParentheses2('(){}[]('))


// =========================================================
// Problem: Write a function to find the contiguous subarray
// within an array (containing at least one number) which
// has the largest sum.

function maxSubarraySum(arr=[]){
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]); //5
    maxSum = Math.max(maxSum, currentSum) //5
  }

  return maxSum;
}

// console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]))

// =========================================================
// Problem: Given an array nums of n integers where n > 1,
// return an array output such that output[i] is equal
// to the product of all the elements of nums except nums[i].


function productExceptSelf(arr=[]){
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let acc= 1;

    for (let j = arr.length-1; j >= 0; j--) {
      if(j===0)
        result.push(acc)

      else if(j === i)
        continue

      else
        acc *= arr[j];

    }
  }

  return result
}

function productExceptSelf2(arr) {
  let n = arr.length;
  let result = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= arr[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
}


// console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]
// console.log(productExceptSelf([1, 2, 3, 4, 5])) // [ 120, 60, 40, 30, 24 ]
// console.log(productExceptSelf2([1, 2, 3, 4])) // [24, 12, 8, 6]
// console.log(productExceptSelf2([1, 2, 3, 4, 5])) // [ 120, 60, 40, 30, 24 ]

// =========================================================
// Write a function fibonacci(n) that returns the nth number in the
// Fibonacci sequence. Use both an iterative and recursive approach.

function fibonacci(n=0){
  let prev = 0;
  let current = 1;
  let sum = prev+current;

  for (let i = 1; i < n; i++) {
    sum = prev + current;
    prev = current;
    current = sum;
  }

  return sum;
}
// console.log(fibonacci(11))

function fibonacciRecursive(num){
  if(num === 0) return 0;
  if(num === 1) return 1;

  return fibonacciRecursive(num-1) + fibonacciRecursive(num-2)
}
// console.log(fibonacciRecursive(10))


// =========================================================
// Flatten a Nested Array:
// Write a function flattenArray(arr) that takes a nested array and
// returns a flattened version of it.
function flattenArray(arr=[]){
  return arr.flat(Infinity);
}
// console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]

function flattenArray2(arr=[]){
  let result = []

  for (const element of arr) {
    if(Array.isArray(element)){
      result.push(...flattenArray2(element))
    } else {
      result.push(element)
    }
  }

  return result;
}
// console.log(flattenArray2([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]


// =========================================================
// Find the Longest Word in a String:
// Write a function longestWord(str) that returns the longest word
// in a given string. If there are multiple words of the same length, return the first one.
function longestWord(str){
  const words = str.split(' ');
  let longest = '';

  for (const element of words) {
    if (element.length > longest.length)
      longest = element
  }

  return longest;
}

console.log(longestWord('The quick brown fox jumps over the lazy dog')); // Output: 'quick'







// =========================================================
//Problem: Suppose an array sorted in ascending order is rotated
// at some pivot unknown to you beforehand. Write a function to
// search for a target value in this array. If found,
// return its index, otherwise return -1.

