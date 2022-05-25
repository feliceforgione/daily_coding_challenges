/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

function duplicateCount(text) {
  let count = {};
  let repeats = 0;
  for (let n of text.toLowerCase().split("")) {
    if (count[n]) count[n]++;
    else count[n] = 1;
  }
  for (let c in count) {
    if (count[c] > 1) repeats++;
  }
  return repeats;
}
