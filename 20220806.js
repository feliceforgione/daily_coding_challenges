/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

const search = (nums, target) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let middlePointer;
  let middleValue;
  while (leftPointer <= rightPointer) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    middleValue = nums[middlePointer];
    if (middleValue === target) return middlePointer;
    if (middleValue > target) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  return -1;
};

const searchRecursive = (nums, target) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  console.log(nums, middlePointer, leftPointer, rightPointer);

  if (nums[middlePointer] > target) {
    rightPointer = middlePointer - 1;
  } else {
    leftPointer = middlePointer + 1;
  }
  if (nums[middlePointer] == target) return leftPointer;
  if (leftPointer > rightPointer) return -1;
  const subNums = nums.slice(leftPointer, rightPointer + 1);
  return leftPointer + searchRecursive(subNums, target);
};
