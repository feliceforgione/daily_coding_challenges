/* In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. */

function solution(digits) {
  digits = String(digits);
  const sequenceLength = 5;
  let max = 0;
  const maxLength = digits.length - sequenceLength;
  let newSubNumber = 0;
  for (let i = 0; i <= maxLength; i++) {
    newSubNumber = Number(digits.substring(i, sequenceLength));
    if (newSubNumber > max) max = newSubNumber;
  }
  return max;
}
