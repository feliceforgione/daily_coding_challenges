// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  let sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!

function getSum(a, b) {
  if (a === b) return a;
  let sum = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
