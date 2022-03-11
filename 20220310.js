// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// p: array, number
// R: array
// E:   divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
// PC:  use filter method
//      check if number % divisor equals 0

function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor == 0);
}
