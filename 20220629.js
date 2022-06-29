/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. */

let isAnagram = (test, original) => {
  let letterCountTest = {};
  test
    .toLowerCase()
    .split("")
    .forEach((c) => {
      if (c in letterCountTest) letterCountTest[c]++;
      else letterCountTest[c] = 1;
    });
  let letterCountOriginal = {};
  original
    .toLowerCase()
    .split("")
    .forEach((c) => {
      if (c in letterCountOriginal) letterCountOriginal[c]++;
      else letterCountOriginal[c] = 1;
    });
  return (
    Object.entries(letterCountTest).sort().toString() ===
    Object.entries(letterCountOriginal).sort().toString()
  );
};

console.log(isAnagram("foefet", "toffee"));
