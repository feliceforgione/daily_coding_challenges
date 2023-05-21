/* Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3 */

function getMissingElement(arr: number[]): number {
  const arrValueObj = {};
  for (let num of arr) {
    arrValueObj[num] = true;
  }
  for (let i = 0; i <= 9; i++) {
    if (arrValueObj[i] == null) return i;
  }
  return -1;
}

const arr = [0, 5, 1, 3, 2, 9, 7, 6, 4];
console.log(getMissingElement(arr));
