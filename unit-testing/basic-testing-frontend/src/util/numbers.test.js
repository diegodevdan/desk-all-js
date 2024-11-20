import {describe, expect, it} from "vitest";
import {cleanNumbers, transformToNumber} from "./numbers";

describe('transformToNumber', () => {
  it('should transform character to number', () => {
    let result = transformToNumber('1');
    expect(Number(result)).toBe(1);
  });

  it('should do nothing with a numeric value provided', () => {
    let result = transformToNumber(1);
    expect((result)).toBeTypeOf('number');
  });

  it('should yield NaN if a non-numeric value is provided', () => {
    let result = transformToNumber('a');
    expect(result).toBeNaN();
  })

  it('Should yield NaN for non transformable values', () => {
    let result = transformToNumber({});
    expect(result).toBeNaN();

  });
})


describe('cleanNumbers()', () => {
  it('should return an array of numbers if an array of string number values is provided', () => {
    const numbers = ['1', '2', '3'];
    const result = cleanNumbers(numbers);
    expect(result[0]).toBeTypeOf('number');
  })

  it('should return an array of numbers if an array of numeric values is provided', () => {
    const numbers = [1, 2, 3];
    const result = cleanNumbers(numbers);
    expect(result[0]).toBeTypeOf('number');
  })

  it('should return an array of numbers if an array of mixed values is provided', () => {
    const numbers = [1, '2', 3];
    const result = cleanNumbers(numbers);
    expect(result[0]).toBeTypeOf('number');
  })

  // it('should throw an error if an array of non-numeric values is provided', () => {
  //   const numbers = ['a', '', 'c'];
  //   expect(() => cleanNumbers(numbers)).toThrow();
  // })
})