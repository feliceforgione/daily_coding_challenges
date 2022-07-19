/* Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string */

function reverseLetter(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  return str
    .split("")
    .filter((c) => alpha.includes(c))
    .reverse()
    .join("");
}

console.log(reverseLetter("ultr53o?n"));
