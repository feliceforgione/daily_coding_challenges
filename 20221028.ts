/* Write a function that returns the sum of two numbers.
Write a function that returns the sum of all numbers regardless of # of params. */

function add(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param1: number[]): number {
  return param1.reduce((a, c) => a + c, 0);
}
