/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N. */

// P: array of integers
// R: integer
// E: [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
/* 
  Determing if array is odd or even by checking count of first 3 elements
  next loop thru array checking if integer is not the same parity as majority of items
*/

function findOutlier(integers) {
  let parity = { odd: 0, even: 0 };
  for (let i = 0; i < 3; i++) {
    integers[i] % 2 ? parity.odd++ : parity.even++;
  }
  const isEven = parity.even > parity.odd;

  for (n of integers) {
    if (isEven && n % 2 != 0) return n;
    if (!isEven && n % 2 === 0) return n;
  }
}
