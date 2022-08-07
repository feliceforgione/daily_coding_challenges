/* You are given a string consisting of only lower case and upper case letters and integers. Write a function that will take this string as input and return the index of the first character that is non-repeating */

// Brute Force  T O(n^2)
const nonRepeatingIndexBF = (str) => {
  const length = str.length;
  let duplicateFound;
  for (let i = 0; i < length; i++) {
    const firstValue = str[i];
    duplicateFound = false;
    for (let j = 0; j < length; j++) {
      if (str[j] === firstValue && i !== j) duplicateFound = true;
    }
    if (!duplicateFound) return i;
  }
  return null;
};

// Using hash map T O(n)  S= O(1) because of finite number of characters
const nonRepeatingIndex = (str) => {
  const hashMap = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!(char in hashMap)) hashMap[char] = 0;
    hashMap[char]++;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (hashMap[char] === 1) return i;
  }
  return null;
};
