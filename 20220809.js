/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. */

const sequence = (arr, target) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer;
  let middleValue;
  let count = 0;
  let leftAnswer = -1;
  let rightAnswer = -1;

  while (leftPointer <= rightPointer && leftAnswer == -1) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    middleValue = arr[middlePointer];
    if (middleValue == target) {
      if (leftPointer == middlePointer) leftAnswer = middlePointer;
      if (arr[middlePointer - 1] != target) leftAnswer = middlePointer;
      rightPointer = middlePointer - 1;
    }
    if (middleValue < target) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }
  leftPointer = 0;
  rightPointer = arr.length - 1;
  while (leftPointer <= rightPointer && rightAnswer == -1) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    middleValue = arr[middlePointer];
    if (middleValue == target) {
      if (rightPointer == middlePointer) rightAnswer = middlePointer;
      if (arr[middlePointer + 1] != target) rightAnswer = middlePointer;
      leftPointer = middlePointer + 1;
    }
    if (middleValue > target) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }

  return [leftAnswer, rightAnswer];
};
