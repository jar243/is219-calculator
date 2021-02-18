const Calculation = require('./models/calculation')

class Calculator {
  static calculations = []
  static sum(a, b) {
    return this._calc('add', a, b);
  }
  static difference(a, b) {
    return this._calc('subtract', a, b);
  }
  static product(a, b) {
    return this._calc('multiply', a, b);
  }
  static quotient(a, b) {
    return this._calc('divide', a, b);
  }
  static _calc(operation, a, b) {
    let calculation = new Calculation(operation, a, b);
    Calculator.calculations.push(calculation);
    return calculation.getResult();
  }
}

module.exports = Calculator;
