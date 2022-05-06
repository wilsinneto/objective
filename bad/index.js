for (let element = 1; element < 10; element++) {
  const elementIsDivisibleBy3 = element % 3 === 0;
  const elementIsDivisibleBy5 = element % 5 === 0;
  const elementIsDivisibleBy7 = element % 7 === 0;

  if (elementIsDivisibleBy3 && !elementIsDivisibleBy5) console.log("fizz");
  if (elementIsDivisibleBy5 && !elementIsDivisibleBy3) console.log("buzz");
  if (elementIsDivisibleBy3 && elementIsDivisibleBy5) console.log("fizz buzz");
  if (!elementIsDivisibleBy3 && !elementIsDivisibleBy5) console.log(element)
  if (elementIsDivisibleBy7) console.log("Fulano")
}
