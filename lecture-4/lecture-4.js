// Create a Calculator class.
// The constructor accepts two numbers, if at least one is not valid, it throws an error.
// We do not consider Infinity and other special values of the number type to be valid numbers.
// Methods:
// setX() - sets the first number
// setY() - sets the second number
//
// logSum() - returns the sum of the given numbers
// logMul() - returns the product of the given numbers
// logSub() - returns the difference of the given numbers
// logDiv() - returns the quotient of the given numbers, throws an error when dividing by 0.
//
// All methods of the second group should work correctly even if they are placed in a separate variable
//
// const logSumRef = calculator.logSum;
// console.log(logSumRef()); // still works

class Calculator {
  // private fields
  #x
  #y

  constructor(x, y) {
    this.setX(x)
    this.setY(y)

    // bind methods
    this.logSum = this.logSum.bind(this)
    this.logMul = this.logMul.bind(this)
    this.logSub = this.logSub.bind(this)
    this.logDiv = this.logDiv.bind(this)
  }

  isValidNumber(value) {
    return typeof value === 'number' && isFinite(value)
  }

  setX(newValue) {
    if (!this.isValidNumber(newValue)) throw 'Error'
    this.#x = newValue
  }

  setY(newValue) {
    if (!this.isValidNumber(newValue)) throw 'Error'
    this.#y = newValue
  }

  logSum() {

    return this.#x + this.#y
  }

  logMul() {
    return this.#x * this.#y
  }

  logSub() {
    return this.#x - this.#y
  }

  logDiv() {
    if (this.#y === 0) throw 'Error. You can\'t dividing by 0'
    return this.#x / this.#y
  }
}


const calculator = new Calculator(40, 2)

console.log(calculator.logSum())
console.log(calculator.logMul())
console.log(calculator.logSub())
console.log(calculator.logDiv())

const logSumRef = calculator.logSum
console.log(logSumRef()) // still works