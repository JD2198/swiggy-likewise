const sum = (a,b) => {
    return a+b;
}


test("", () => {

    const result = sum(2,2);

    expect(result).toBe(4);
})