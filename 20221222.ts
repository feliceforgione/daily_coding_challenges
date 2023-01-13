/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

const majorityElement = function (nums: number[]): number {
  const numsMap = {};
  let maxCount = 0;
  let maxCountValue = 0;

  for (const num of nums) {
    numsMap[num] = numsMap[num] + 1 || 1;
  }

  for (const num in numsMap) {
    if (numsMap[num] > maxCount) {
      maxCount = numsMap[num];
      maxCountValue = parseInt(num);
    }
  }
  return maxCountValue;
};

const majorityElementSort = function (nums: number[]) {
  interface NumsMap {
    [num: string]: number;
  }
  const numsMap: NumsMap = {};

  for (const num of nums) {
    numsMap[num] = numsMap[num] + 1 || 1;
  }

  return Object.entries(numsMap).sort((a, b) => (a[1] > b[1] ? -1 : 1))[0][0];
};

console.log(majorityElementSort([2, 2, 1, 1, 1, 2, 2]));
