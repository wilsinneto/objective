class IsDivisibleBy3And5 {
  perform(number) {
    if (number % 3 === 0 && number % 5 === 0) return "fizz buzz";
  }
}

module.exports = IsDivisibleBy3And5;
