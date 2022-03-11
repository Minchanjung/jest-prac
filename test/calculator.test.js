import calculator from '../code/calculator'

test('add two numbers', () => {
    expect(calculator.add(1, 1)).toBe(2)
})

test('subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
})

test('multiply two numbers', () => {
    expect(calculator.multiply(5, 2)).toBe(10)
})

test('divide two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test('divide by 0 equals null', () => {
    expect(calculator.divide(10, 0)).toBe(null)
})

test('subtract equals negative', () => {
    expect(calculator.subtract(1, 5)).toBe(-4)
})

test('negative subtraction equals positve', () => {
    expect(calculator.subtract(-1, -6)).toBe(5)
})