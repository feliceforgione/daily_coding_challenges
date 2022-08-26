/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/

const findDuplicate = (arr) => {
  let head = 0;
  let turtle = head;
  let hare = head;
  while (true) {
    turtle = arr[turtle];
    hare = arr[arr[hare]];
    if (turtle == hare) {
      break;
    }
  }

  hare = head;
  while (hare != turtle) {
    hare = arr[hare];
    turtle = arr[turtle];
  }
  return hare;
};
