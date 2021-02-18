class Calculation {
  constructor(operation, a, b) {
    const opToFunc = {
      'add': require('../operations/add'),
      'divide': require('../operations/divide'),
      'exponentiate': require('../operations/exponentiate'),
      'multiply': require('../operations/multiply'),
      'root': require('../operations/root'),
      'subtract': require('../operations/subtract')
    }
    if (typeof opToFunc[operation] === 'undefined') {
      throw ['unsupported operation:', operation].join(' ');
    }

    this.operation = operation;
    this.a = a;
    this.b = b;
    this.func = opToFunc[operation];
  }
  getResult() {
    return this.func(this.a, this.b)
  }
}

module.exports = Calculation;