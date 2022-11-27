// --- Directions
// Given a string, return a new string with the reversed. Do it four ways
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseOne(str) {
  return str.split("").reverse().join("");
}

function reverseTwo(str) {
  const chars = str.split("");
  const reversedStr = [];

  for (let i = chars.length - 1; i >= 0; i--) {
    reversedStr.push(chars[i]);
  }
  return reversedStr.join("");
}

function reverseThree(str) {
  const chars = str.split("");
  const middleIndex = Math.floor(chars.length / 2);
  let leftIndex = 0;
  let rightIndex = chars.length;
  while (leftIndex < rightIndex) {
    const temp = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return chars.join("");
}

function reverse(str) {
  return str.split("").reduce((reversedStr, char) => char + reversedStr, "");
}
