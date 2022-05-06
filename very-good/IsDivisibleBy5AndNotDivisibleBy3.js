class IsDivisibleBy5AndNotDivisibleBy3 {
  perform(number) {
    if (number % 5 === 0 && number % 3 !== 0) return "buzz";
  }
}

module.exports = IsDivisibleBy5AndNotDivisibleBy3;
