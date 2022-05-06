const initValue = 1;
const totalValue = 100;

const IsDivisibleBy3And5 = require("./IsDivisibleBy3And5");
const IsDivisibleBy3AndNotDivisibleBy5 = require("./IsDivisibleBy3AndNotDivisibleBy5");
const IsDivisibleBy5AndNotDivisibleBy3 = require("./IsDivisibleBy5AndNotDivisibleBy3");
const IsNotDivisibleBy3And5 = require("./IsNotDivisibleBy3And5");
const IsDivisibleBy7 = require("./IsDivisibleBy7");

class Condition {
  #strategy;

  constructor(Strategy) {
    this.#strategy = Strategy;
  }

  isDivisible(num) {
    return this.#strategy.perform(num);
  }

  show(num) {
    console.log(num);
  }
}

const isDivisibleBy3And5 = new Condition(new IsDivisibleBy3And5());
const isDivisibleBy3AndNotDivisibleBy5 = new Condition(new IsDivisibleBy3AndNotDivisibleBy5());
const isDivisibleBy5AndNotDivisibleBy3 = new Condition(new IsDivisibleBy5AndNotDivisibleBy3());
const isNotDivisibleBy3And5 = new Condition(new IsNotDivisibleBy3And5());
const isDivisibleBy7 = new Condition(new IsDivisibleBy7());

const conditions = (num) => {
  const result1 = isDivisibleBy3And5.isDivisible(num);
  if (result1) isDivisibleBy3And5.show(result1);

  const result2 = isDivisibleBy3AndNotDivisibleBy5.isDivisible(num);
  if (result2) isDivisibleBy3AndNotDivisibleBy5.show(result2);

  const result3 = isDivisibleBy5AndNotDivisibleBy3.isDivisible(num);
  if (result3) isDivisibleBy5AndNotDivisibleBy3.show(result3);

  const result4 = isDivisibleBy7.isDivisible(num);
  if (result4) isDivisibleBy7.show(result4);

  const result5 = isNotDivisibleBy3And5.isDivisible(num);
  if (result5) isNotDivisibleBy3And5.show(result5);
};

for (let num = initValue; num < totalValue; num++) {
  conditions(num);
}
