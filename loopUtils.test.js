const { calculateSum, findMax, generateSequence } = require('./loopUtils');

test('Calculate sum of numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(calculateSum(numbers)).toBe(15);
});

test('Find maximum number', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(findMax(numbers)).toBe(5);
});

test('Generate sequence of numbers', () => {
  expect(generateSequence(5)).toEqual([0, 1, 2, 3, 4]);
});