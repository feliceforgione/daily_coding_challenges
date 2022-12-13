/*  Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!) */

function findMissingLetter(arr: string[]): string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) + 1 !== arr[i + 1].charCodeAt(0))
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
  }
  throw new Error("Invalid input");
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
