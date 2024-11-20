import {describe, expect, it} from "vitest";
import {generateResultText} from "./output";


describe('generateResultText()', () => {
  it('Should return a string, no matter which value is passed in', () => {
    const val1 = 1
    const val2 = 'invalid'
    const val3 = false
    const res1 = generateResultText(val1)
    const res2 = generateResultText(val2)
    const res3 = generateResultText(val3)

    expect(typeof res1).toBe('string')
    expect(res2).toBeTypeOf('string')
    expect(res3).toBeTypeOf('string')
  });

  it('Should return "Invalid input. You must enter valid numbers." if "invalid" is passed in', () => {
    const val = 'invalid'
    const res = generateResultText(val)

    expect(res).toBe('Invalid input. You must enter valid numbers.')
  });

  it('Should return "Result: " + the passed in value if it is not "invalid"', () => {
    const val = 1
    const res = generateResultText(val)

    expect(res).toBe('Result: ' + val)
  });
});