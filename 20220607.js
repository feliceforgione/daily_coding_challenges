// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// P: arr of numbers
// R: number
// E:   [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = (arr) => {
  return parseInt(
    arr.reduce((acc, n) => acc + n, ""),
    2
  );
};
