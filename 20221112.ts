// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string): string {
  const countHash: object = {};
  let maxCount: number = 0;
  let maxChar: string = "";
  for (let char of str) {
    char in countHash ? countHash[char]++ : (countHash[char] = 1);
  }
  for (let char in countHash) {
    if (countHash[char] > maxCount) {
      maxCount = countHash[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar("apple 1231111"));
