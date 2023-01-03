/* An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []). */

function findDeletedNumber(arr: number[], mixArr: number[]): number {
  const hashMap = {};
  for (let num of mixArr) {
    hashMap[num] = hashMap[num] + 1 || 1;
  }
  console.log(hashMap);
  for (let num of arr) {
    if (!(num in hashMap)) return num;
  }
  return 0;
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
