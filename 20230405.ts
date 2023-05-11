// Find minimum value four ways

const findMin1 = (nums: number[]): number => {
  let minNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }
  return minNum;
};

const findMin2 = (nums: number[]): number => {
  return Math.min(...nums);
};

const findMin3 = (nums: number[]): number => {
  return nums.sort((a, b) => a - b)[0];
};

const findMin4 = (nums: number[]): number => {
  return nums.reduce((acc, num) => (num < acc ? num : acc), nums[0]);
};

const numsArr = [-10, 5, 20, 3, -100];
console.log(findMin1(numsArr));
console.log(findMin2(numsArr));
console.log(findMin3(numsArr));
console.log(findMin4(numsArr));
