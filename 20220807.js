/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. */

const search = (nums, target) => {
  let middleValue;
  let middlePointer;
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let leftValue;
  let rightValue;

  while (leftPointer <= rightPointer) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    middleValue = nums[middlePointer];

    if (target == middleValue) return middlePointer;
    leftValue = nums[leftPointer];
    rightValue = nums[rightPointer];
    // find sorted side
    if (leftValue <= middleValue) {
      //left side is sorted
      // check if sorted side contains target
      if (leftValue <= target && target < middleValue) {
        rightPointer = middlePointer - 1;
      } else {
        leftPointer = middlePointer + 1;
      }
    } else {
      // right side is sorted
      // check if sorted side contains target
      if (middleValue < target && target <= rightValue) {
        leftPointer = middlePointer + 1;
      } else {
        rightPointer = middlePointer - 1;
      }
    }
  }
  return -1; // no match found
};
