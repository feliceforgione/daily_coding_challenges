/* 
Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.
*/

function findMissingNumber(arr: number[]): number {
  const fullLength = arr.length + 1;
  const sumArr = arr.reduce((acc, num) => acc + num, 0);
  const sumFullArr = (fullLength * (fullLength + 1)) / 2;
  return sumFullArr - sumArr;
}
