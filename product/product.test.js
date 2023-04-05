const product = require('./product')

test('1 * 2 = 2', () => {
    expect(product(1, 1)).toBe(2);
});