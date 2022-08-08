/* Given a string, write a function to check whether the string is a palindrome or not */

// Create a new reversed string and compare  T= O(n^2) S = O(n)
const palindrome1 = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
};

// Create a new reversed array and compare  T= O(n) S = O(n)
const palindrome2 = (str) => {
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return str === reversedStr.join("");
};

// Use two pointers for each end and compare  T= O(n) S = O(1)
const palindrome3 = (str) => {
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }
  return true;
};
