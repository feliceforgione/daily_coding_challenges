/* fibonnaci four ways including bottoms up and memoization */

function fibonacci(n) {
  let sum = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
}

function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciRecursiveMem(n: number, memMap: number[] = []) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memMap[n] != null) return memMap[n];
  else
    memMap[n] =
      fibonacciRecursiveMem(n - 1, memMap) +
      fibonacciRecursiveMem(n - 2, memMap);
  return memMap[n];
}

function fibonacciRecursiveBottom(n: number, memMap: number[] = [0, 1]) {
  if (memMap[n] != null) return memMap[n];
  for (let i = 2; i <= n; i++) {
    memMap[i] =
      fibonacciRecursiveMem(i - 1, memMap) +
      fibonacciRecursiveMem(i - 2, memMap);
  }
  return memMap[n];
}

console.log(fibonacci(8));
console.log(fibonacciRecursive(35));
console.log(fibonacciRecursiveMem(118));
console.log(fibonacciRecursiveBottom(35));
