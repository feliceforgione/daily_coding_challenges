/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */

// P: Number
// R: Number
/* Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6 */

/* 
    check length of number if equals 1 then this is answer
    determine new sum of digits
*/

function digital_root(n) {
  if (String(n).length === 1) return n;
  let sum = String(n)
    .split("")
    .reduce((acc, inc) => acc + Number(inc), 0);

  return digital_root(sum);
}
