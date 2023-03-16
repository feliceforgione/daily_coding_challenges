/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cas */

function solve(s: string): number[] {
  let upper = 0;
  let lower = 0;
  let special = 0;
  let number = 0;
  for (let char of s) {
    const charCode = char.charCodeAt(0);
    console.log(charCode);
    if (charCode > 47 && charCode < 58) {
      number++;
    } else if (charCode > 64 && charCode < 91) {
      upper++;
    } else if (charCode > 96 && charCode < 123) {
      lower++;
    } else {
      special++;
    }
  }
  return [upper, lower, number, special];
}

console.log(solve("abcd"));
