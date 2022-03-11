import capitalize from "../code/capitalize";

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
  });

test('"Test" should become "Test"', () => {
    expect(capitalize("Test")).toBe("Test");
});

test('multi word test', () => {
    expect(capitalize("hi my name is")).toBe("Hi My Name Is");
});

test('multi word with numbers', () => {
    expect(capitalize("hi 2343this is a test 1222")).toBe("Hi 2343this Is A Test 1222");
});

test('handle extra space', () => {
    expect(capitalize("    hey     hi    ")).toBe("    Hey     Hi    ")
});