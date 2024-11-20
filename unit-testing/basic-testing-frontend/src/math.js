import {it} from "vitest";
import {validateNumber, validateStringNotEmpty} from "./util/validation";
import {cleanNumbers, transformToNumber} from "./util/numbers";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberValues) {
  let result = '';
  try {
    const numbers = cleanNumbers(numberValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}

//build at least 5 professional unit tests for this function
//test for the following:
//1. the function should take in an array of numbers
//2. the function should return the sum of the numbers
//3. the function should work for numbers as strings
//4. the function should ignore non-numeric values
//5. the function should throw an error if the argument provided is not an array
//6. the function should throw an error if the array is empty
//7. the function should throw an error if the array contains only one element
//8. the function should throw an error if the array contains an invalid number
