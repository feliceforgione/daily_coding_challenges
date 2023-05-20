/* Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100" */

function vowelOne(str: string): string {
  const output: number[] = [];
  const vowels = "aeiou".split("");
  for (let char of str) {
    vowels.includes(char.toLowerCase()) ? output.push(1) : output.push(0);
  }
  return output.join("");
}

const str = "aeiou, abc";
console.log(vowelOne(str));
