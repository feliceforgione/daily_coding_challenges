/* Solve factiorial using recursion and recursion with memoization */

const factorial = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

const factorialCache: number[] = [];
const factorialWithCache = (n: number): number => {
  if (!factorialCache[n]) {
    factorialCache[n] = n <= 1 ? 1 : n * factorialWithCache(n - 1);
  }
  return factorialCache[n];
};

console.log(factorial(5));
console.log(factorialWithCache(5));
