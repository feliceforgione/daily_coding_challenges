/* An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

const isMonotonic = function (nums) {
  if (nums.length < 2) return true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[0] < nums[nums.length - 1] && nums[i] > nums[i + 1]) {
      return false;
    }
    if (nums[0] > nums[nums.length - 1] && nums[i] < nums[i + 1]) {
      return false;
    }
    if (nums[0] === nums[nums.length - 1] && nums[i] != nums[i + 1]) {
      return false;
    }
  }
  return true;
};
