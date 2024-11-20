import {describe, expect, it} from "vitest";

export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  }
}


describe('validateStringNotEmpty', () => {
  it('should throw an error if the input is an empty string', () => {
    expect(() => validateStringNotEmpty('')).toThrow('Invalid input - must not be empty.');
  })

  it('should throw an error if the input is a string with only spaces', () => {
    expect(() => validateStringNotEmpty('   ')).toThrow('Invalid input - must not be empty.');
  })

  it('should not throw an error if the input is a string with at least one character', () => {
    let resultFn = () => validateStringNotEmpty('a');
    expect(resultFn).not.toThrow('Invalid input - must not be empty.');
  })
})

describe('validateNumber', () => {
  it('should throw an error if the input is not a number', () => {
    const resultFn = () => validateNumber('abc');
    expect(resultFn).toThrow('Invalid number input.');
  });

  it('should not throw an error if the input is a number', () => {
    let resultFn = () => validateNumber(1);
    expect(resultFn).not.toThrow('Invalid number input.');
  })

})
