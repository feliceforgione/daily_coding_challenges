/* Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15 */

function sum(): number {
  return [...arguments].reduce((acc, c) => acc + c, 0);
}

console.log(sum(1, 2, 3));
