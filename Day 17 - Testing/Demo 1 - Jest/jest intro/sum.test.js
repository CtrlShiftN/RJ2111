const sum = require('./sum');

test('Sum test', () => {
    expect(sum(2, 4)).toBe(6);
})