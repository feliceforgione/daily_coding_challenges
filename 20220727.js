// Given an array, rotate the array to the right by k steps, where k is non-negative.

const reverseX = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

const rotate = (arr, k) => {
  k = k % arr.length;
  arr = reverseX(arr, 0, arr.length - 1);
  arr = reverseX(arr, 0, k - 1);
  arr = reverseX(arr, k, arr.length - 1);
  return arr;
};
