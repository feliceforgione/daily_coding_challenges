/* Greatest common denominator */

/* Using Loop
1. Find the smaller number between a and b
2. Decrement the smaller number until you find value that divides into both numbers evenly
*/

function gcdLoop(a, b) {
  for (let i = Math.min(a, b); i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
}
console.log(gcdLoop(1, 1));

/* Euclidean
1. Divide smaller number into larger number.
2. If a reminder exists then pass the smaller number and the reminder
3. once zero reminder return the other number
Note larger%smaller will give you smaller as a remainder
*/

function gcdRecursive(a, b) {
  if (b === 0) return a;
  return gcdRecursive(b, a % b);
}

console.log(gcdRecursive(30, 12));
