import {extractEnteredNumbers, extractNumbers} from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import {add, calculateResult} from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import {generateResultText, outputResult} from "./src/output";

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numbersValues = extractEnteredNumbers(form);

  let result = calculateResult(numbersValues);

  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
