const dividend = require('./dividend')

test('1 / 2 = 0.5', () => {
    expect(dividend(1, 2)).toBe(0.5);
});