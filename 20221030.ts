/* You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be addTwoDigits(n) = 11.
*/
function addTwoDigits(n: any): number {
  return n
    .toString()
    .split("")
    .reduce((a, c) => +c + a, 0);
}

// console.log(addTwoDigits(29));
