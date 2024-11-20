import {describe, expect, it} from "vitest";
// import {expect, it} from "jest";
import {add} from "./math";

describe('add()', () => {
  it('should summarize all number values in an array', () => {
    //Arrange
    const numbers = [1,2,3]

    //Act
    const result = add(numbers);

    //Assert
    const expectedResult = numbers.reduce((prev,curr) => prev+curr,0);
    expect(result).toBe(expectedResult)
  });

  it('should yield NaN if a least one invalid number is provided', () => {
    const inputs = ['invalid', 1,2,3]

    const result = add(inputs);

    expect(result).toBeNaN();
  })

  it('should yield a correct sum if an array ' +
      'of numeric string values is provides', () => {

    const numbers = ['1','2']
    const result = add(numbers);
    const expectedResult = numbers.reduce((prev,curr) => prev+curr,0);
    expect(result).not.toBe(expectedResult)
  })

  it('should ield 0 if an empty array is provided', () => {
    const numbers = []
    const result = add(numbers)
    expect(result).toBe(0)
  })

  it('should throw an error if no values is passed into the function', () => {
    const resultFn = () => {
      add()
    }
    expect(resultFn).toThrow();
  })

  it('should throw an error if provided with multiple arguments', () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => add(num1,num2)
    expect(resultFn).toThrow(/is not iterable/)
  })
})
