// Given a string s, find the length of the longest substring without repeating characters.

const longestUniqueString = (str) => {
  const seen = {};
  let start = 0;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in seen) {
      max = Math.max(max, i - start);
      start = Math.max(start, seen[char] + 1);
      seen[char] = i;
    } else {
      max = Math.max(max, i - start);
      seen[char] = i;
    }
  }
  return max;
};
