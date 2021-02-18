const add = require('../operations/add')
const divide = require('../operations/divide')
const multiply = require('../operations/multiply')
const subtract = require('../operations/subtract')

class Calculation {
  constructor(operation, a, b) {
    const opToFunc = {
      'add': add,
      'divide': divide,
      'multiply': multiply,
      'subtract': subtract
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