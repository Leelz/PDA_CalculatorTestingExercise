var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  }),
  it('it can add two numbers', function(){
    calculator.add(4);
    calculator.operatorClick('=')
    calculator.add(1);
    assert.equal(5, calculator.runningTotal)
  }),
  it('it can subtract two numbers', function(){
    calculator.add(7);
    calculator.operatorClick('=')
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  }),
  it('it can divide two numbers', function(){
    calculator.add(21);
    calculator.operatorClick('=')
    assert.equal(21, calculator.previousTotal);
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  }),
  it('it can multiply two numbers', function(){
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(5, calculator.previousTotal);
    calculator.multiply(3)
    assert.equal(15, calculator.runningTotal)
  }),
  it('concatenate multiple number button clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    assert.equal(456, calculator.runningTotal)
  }),
  it('can chain multiple operations together', function(){
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.operatorClick('*')
    calculator.operatorClick('*')
    assert.equal(16, calculator.runningTotal)
  }),
  it('can clear the running total without affecting the calculation', function(){
    calculator.add(7)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

});
