/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

const containsDuplicateUsingSet = function (nums: number[]): boolean {
  return nums.length !== new Set([...nums]).size;
};

const containsDuplicateUsingMap = function (nums: number[]): boolean {
  const numMap = {};
  for (const num of nums) {
    numMap[num] = numMap[num] + 1 || 1;
    if (numMap[num] > 1) return true;
  }
  return false;
};

console.log(containsDuplicateUsingMap([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
