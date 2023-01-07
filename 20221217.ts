/*  you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples. */

function dup(s: string[]): string[] {
  return s.map((word) =>
    word
      .split("")
      .filter((char, i, arr) => char !== arr[i + 1])
      .join("")
  );
}

console.log(dup(["abracadabra", "allottee", "assessee"]));
