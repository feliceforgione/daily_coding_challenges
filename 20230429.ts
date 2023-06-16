function reverseStr(str) {
  return str.split("").reverse().join("");
}

function reverseStrII(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  const reversedStr = str.split("");

  while (leftPointer < rightPointer) {
    const temp = reversedStr[rightPointer];
    reversedStr[rightPointer] = reversedStr[leftPointer];
    reversedStr[leftPointer] = temp;
    leftPointer++;
    rightPointer--;
  }

  return reversedStr.join("");
}

function cleanStr(str) {
  return str.toLowerCase().replace(/[^a-z]/g, "");
}

function cleanStrII(str: string): string {
  const unwantedChars = ",? !.";
  const cleanedStr: string[] = [];
  for (const char of str.toLowerCase()) {
    if (!unwantedChars.includes(char)) cleanedStr.push(char);
  }
  console.log(cleanedStr.join(""));
  return cleanedStr.join("");
}

function isPalindrome(phrase) {
  const cleanedPharse = cleanStrII(phrase);
  return cleanedPharse == reverseStrII(cleanedPharse);
}

console.log(isPalindrome("Hello, I am bob?"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Eva, can I see bees in a cave?"));
