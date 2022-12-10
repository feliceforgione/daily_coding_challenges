// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowelsMethods(str: string): number {
  return str.match(/[aeiou]/gi)?.length || 0;
}

function vowels(str: string): number {
  let count = 0;
  const vowelsList = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowelsList.includes(char)) count++;
  }
  return count;
}
