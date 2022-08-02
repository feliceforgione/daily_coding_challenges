/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store. */

// Brute Force O(n^2)
const maxArea = (heightsArr) => {
  if (heightsArr.length < 2 || heightsArr == null) return 0;
  const length = heightsArr.length;
  let maxArea = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const area = (j - i) * Math.min(heightsArr[i], heightsArr[j]);
      if (area > maxArea) maxArea = area;
    }
  }
  return maxArea;
};

// Two Pointers O(n)
const maxArea2 = (heightsArr) => {
  if (heightsArr.length < 2 || heightsArr == null) return 0;
  const length = heightsArr.length;
  let maxArea = 0;
  let area = 0;
  let pointerLeft = 0;
  let pointerRight = length - 1;
  while (pointerLeft < pointerRight) {
    const leftValue = heightsArr[pointerLeft];
    const rightValue = heightsArr[pointerRight];
    if (leftValue < rightValue) {
      area = leftValue * (pointerRight - pointerLeft);
      pointerLeft++;
    } else {
      area = rightValue * (pointerRight - pointerLeft);
      pointerRight--;
    }
    if (area > maxArea) maxArea = area;
  }
  return maxArea;
};
