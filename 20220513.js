// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let count = {};
  for (c of str.toLowerCase().split("")) {
    if (c in count) {
      return false;
    }
    count[c] = 1;
  }
  return true
}


