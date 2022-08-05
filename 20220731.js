/* Solving Fibonacci sequence multiple ways */

// Using Iteration Time O(n)  Space O(1)
const fibonacciBrute = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let first = 0;
  let second = 1;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
};

// Using recursion  Time O(2^n)  Space O(n)
const fibonacciRecursion = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
};

// Using recursion with store Time O(n)  Space O(n)
const fibonacciStore = (n, store = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in store) return store[n];
  store[n] = fibonacciStore(n - 1, store) + fibonacciStore(n - 2, store);
  return store[n];
};

// Using recursion with store Time O(n)  Space O(n)
const fibonacciStore2 = (n, store = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in store) return store[n];
  store[n] = fibonacciStore(n - 1, store) + fibonacciStore(n - 2, store);
  return store[n];
};
