import {add} from './../app'

describe('writing test for addition function', () => {
  test('add two numbers', () => {
    expect(add(1,2)).toBe(3);
  })
  test('add a number and a string', () => {
    expect(add(1 , 'apple')).toBe(null);
  })
  test('add a number and a object', () => {
    expect(add(2, {})).toBe(null);
  })
})