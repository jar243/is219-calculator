const Calculator = require('../src/calculator');

test('Calculator can add two numbers', () => {
  let result = Calculator.sum(3, 7);
  expect(result).toBe(10);
});

test('Calculator can subtract two numbers', () => {
  let result = Calculator.difference(8, 8);
  expect(result).toBe(0);
});

test('Calculator can multiply two numbers', () => {
  let result = Calculator.product(14, -1);
  expect(result).toBe(-14);
});

test('Calculator can divide two numbers', () => {
  let result = Calculator.quotient(1, 2);
  expect(result).toBe(.5);
});

test('Calculator stores calculations', () => {
  let calculations = Calculator.calculations
  calculations.forEach(function (calc) { calc.getResult() });
});
