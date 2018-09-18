import {add} from "./../calc"

// Write Test About Add function
describe("Testing add function", () => {
  test("Adding two numbers", () => {
    expect(add(1,3)).toBe(4)
  })
  test("Adding one number and a string", () => {
    expect(add(1, 'apple')).toBe(null)
  })
  test("Add a string and an object", () => {
    expect(add(1, {})).toBe(null);
  })
})