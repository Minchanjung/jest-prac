import caesarCipher from "../code/caesarCipher";

test('test if it works', () => {
    expect(caesarCipher('abc')).toBe('bcd');
})

test('test if it works with multi word', () => {
    expect(caesarCipher('abc def')).toBe('bcd efg');
})