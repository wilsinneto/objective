class IsDivisibleBy3AndNotDivisibleBy5 {
  perform(number) {
    if(number % 3 === 0 && number % 5 !== 0) return 'fizz';
  }
}

module.exports = IsDivisibleBy3AndNotDivisibleBy5;