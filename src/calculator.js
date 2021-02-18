const Calculation = require('./models/calculation')

class Calculator {
  static calculations = []
  static sum(term1, term2) {
    return this._calc('add', term1, term2);
  }
  static difference(term1, term2) {
    return this._calc('subtract', term1, term2);
  }
  static product(factor1, factor2) {
    return this._calc('multiply', factor1, factor2);
  }
  static quotient(dividend, divisor) {
    return this._calc('divide', dividend, divisor);
  }
  static squareRoot(radicand) {
    return this._calc('root', radicand, 2);
  }
  static square(base) {
    return this._calc('exponentiate', base, 2);
  }
  static _calc(operation, a, b) {
    let calculation = new Calculation(operation, a, b);
    Calculator.calculations.push(calculation);
    return calculation.getResult();
  }
}

module.exports = Calculator;
