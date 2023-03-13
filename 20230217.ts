/* Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47 */

function halvingSum(n: number): number {
  let sum = n;
  let curr = n;
  while (curr >= 1) {
    curr = curr / 2;
    sum += Math.floor(curr);
  }
  return sum;
}

console.log(halvingSum(25));
