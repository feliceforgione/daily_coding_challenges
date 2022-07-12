/* Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
*/

function maxMultiple(divisor, bound) {
  let N = 0;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor == 0) N = i;
  }
  return N;
}

console.log(maxMultiple(2, 7));
