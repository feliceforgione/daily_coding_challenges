/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3) */

function stray(numbers) {
  let count = {};

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in count) count[numbers[i]]++;
    else count[numbers[i]] = 1;
  }

  for (const prop in count) {
    if (count[prop] === 1) return Number(prop);
  }
}
