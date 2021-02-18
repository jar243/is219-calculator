const Calculation = require('../src/models/calculation');


test('Calculation class is constructed correctly', () => {
  let calc = new Calculation('add', 4, 5);
  expect(calc.operation).toBe('add');
  expect(calc.a).toBe(4);
  expect(calc.b).toBe(5);
});

test('Calculation class adds correctly', () => {
  let calc = new Calculation('add', 6, 7);
  expect(calc.getResult()).toBe(13);
});

test('Calculation class subtracts correctly', () => {
  let calc = new Calculation('subtract', 6, 7);
  expect(calc.getResult()).toBe(-1);
});

test('Calculation class multiplies correctly', () => {
  let calc = new Calculation('multiply', 6, 7);
  expect(calc.getResult()).toBe(42);
});

test('Calculation class divides correctly', () => {
  let calc = new Calculation('divide', 10, 5);
  expect(calc.getResult()).toBe(2);
});
