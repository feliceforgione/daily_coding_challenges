/* An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise. 

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums: number[]): boolean {
  let prevValue = nums[0];
  let currInd = 0;
  const len = nums.length;
  let direction = 0;

  while (currInd < len) {
    if (prevValue > nums[currInd]) {
      if (direction === 0) {
        direction = -1;
      } else if (direction === 1) {
        return false;
      }
    } else if (prevValue < nums[currInd]) {
      if (direction === 0) {
        direction = 1;
      } else if (direction === -1) {
        return false;
      }
    }
    prevValue = nums[currInd];
    currInd++;
  }

  return true;
};

const nums = [1, 1, 1, 1, 1];
const nums2 = [6, 5, 4, 4];
const nums3 = [1, 3, 2];

console.log(isMonotonic(nums));
