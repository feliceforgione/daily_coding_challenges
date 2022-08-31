/* Remove duplicates from array in Javascript */

const a = [1, 2, 5, 2, 1, 8];

// Brute Force Method  T= O(n^2)   S = O(n)  Maintains order

const bruteForceRemoveDuplicates = (arr) => {
  const noDuplicatesArr = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const arrValue = arr[i];
    if (!noDuplicatesArr.includes(arrValue)) {
      noDuplicatesArr.push(arrValue);
    }
  }
  return noDuplicatesArr;
};

console.log(bruteForceRemoveDuplicates(a));

// Using sort   T = O(log n + N)  S = O(n)   Order NOT maintained

const sortRemoveDuplicates = (arr) => {
  const noDuplicatesArr = [];
  const arrLength = arr.length;
  arr = arr.sort();
  let prevVal;
  for (let i = 0; i < arrLength; i++) {
    const currVal = arr[i];
    if (currVal != prevVal) {
      noDuplicatesArr.push(currVal);
      prevVal = currVal;
    }
  }
  return noDuplicatesArr;
};
console.log(sortRemoveDuplicates(a));

// Using Map  T = O(n)  S = O(n)

const mapRemoveDuplicates = (arr) => {
  const hashMap = {};

  for (let currVal of arr) {
    hashMap[currVal] = true;
    // keys cant be duplicated. so when a duplicate comes is  sets it to true again
  }
  return Object.keys(hashMap);
};

console.log(mapRemoveDuplicates(a));

// Using One Line with Sets

const setsRemoveDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(setsRemoveDuplicates(a));
