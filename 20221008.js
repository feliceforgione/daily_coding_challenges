/* Given a string of text, find and return the most recurring character. Solve it two ways */

function maxRecurringChar(text) {
  const charMap = {};
  let maxCharCount = 0;
  let maxCharValue = null;

  for (let char of text) {
    if (char in charMap) charMap[char]++;
    else charMap[char] = 1;
  }
  for (let char in charMap) {
    if (charMap[char] > maxCharCount) {
      maxCharCount = charMap[char];
      maxCharValue = char;
    }
  }
  return maxCharValue;
}

function maxRecurringChar(text) {
  const charMap = {};

  for (let char of text) {
    if (char in charMap) charMap[char]++;
    else {
      charMap[char] = 1;
    }
  }

  const values = Object.values(charMap);
  const keys = Object.keys(charMap);
  const maxValue = Math.max(...values);
  const index = values.indexOf(maxValue);
  return keys[values.indexOf(maxValue)];
}
