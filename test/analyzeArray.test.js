import { analyzeArray, findAverage, findMin, findMax, findLength } from "../code/analyzeArray";

test("test array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6})
})

test('find max', () => {
    expect(findMax([1,8,3,4,2,6])).toBe(8)
})

test('find min', () => {
    expect(findMin([1,8,3,4,2,6])).toBe(1)
})

test('find average', () => {
    expect(findAverage([1,8,3,4,2,6])).toBe(4)
})

test('find length', () => {
    expect(findLength([1,8,3,4,2,6])).toBe(6)
})