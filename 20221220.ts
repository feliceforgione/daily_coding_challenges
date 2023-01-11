/* Given a string of characters, return the character that appears the most often.
 */

function max(str: string): string {
  const charMap = {};
  let maxCount = 0;
  let maxCharValue = "";
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (const char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxCharValue = char;
    }
  }
  return maxCharValue;
}

console.log(max("Hello World!"));
