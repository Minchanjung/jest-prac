import reverseString from "../code/reverseString";

test('single word reverse', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('mulit word reverse', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('single word reverse with numbers and spaces', () => {
    expect(reverseString('hello world 999    ')).toBe('    999 dlrow olleh')
})