/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13 */

function mxdiflg(a1: string[], a2: string[]): number {
  if (a1.length === 0 || a2.length === 0) return -1;
  const a1Lens = a1.map((str) => str.length);
  const a2lens = a2.map((str) => str.length);
  return Math.max(
    Math.abs(Math.max(...a1Lens) - Math.min(...a2lens)),
    Math.abs(Math.min(...a1Lens) - Math.max(...a2lens))
  );
}

const a1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(a1, a2));
