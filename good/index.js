const initValue = 1;
const totalValue = 100;
const isDivisibleBy3 = (num) => num % 3 === 0;
const isDivisibleBy5 = (num) => num % 5 === 0;

const isDivisibleBy3AndNotDivisibleBy5 = (num) => {
  if (isDivisibleBy3(num) && !isDivisibleBy5(num)) console.log("fizz");
};

const isDivisibleBy5AndNotDivisibleBy3 = (num) => {
  if (isDivisibleBy5(num) && !isDivisibleBy3(num)) console.log("buzz");
};

const isDivisibleBy3And5 = (num) => {
  if (isDivisibleBy3(num) && isDivisibleBy5(num)) console.log("fizz buzz");
};

const isNotDivisibleBy3And5 = (num) => {
  if (!isDivisibleBy3(num) && !isDivisibleBy5(num)) console.log(num);
};

const isDivisibleBy7 = (num) => {
  if (num % 7 === 0) console.log("Fulano");
};

const isDivisible = (num) => {
  isDivisibleBy3AndNotDivisibleBy5(num);
  isDivisibleBy5AndNotDivisibleBy3(num);
  isDivisibleBy3And5(num);
  isNotDivisibleBy3And5(num);
  isDivisibleBy7(num);
};

(() => {
  for (let element = initValue; element < totalValue; element++) {
    isDivisible(element);
  }
})();
