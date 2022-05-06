class IsNotDivisibleBy3And5 {
  perform(number) {
    if(number % 3 !== 0 && number % 5 !== 0) return number;
  }
}

module.exports = IsNotDivisibleBy3And5;