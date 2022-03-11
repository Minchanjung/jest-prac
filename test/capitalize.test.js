import capitalize from "../code/capitalize";

test("one word capitalize", () => {
    expect(capitalize('ben')).tobe('Ben')
});