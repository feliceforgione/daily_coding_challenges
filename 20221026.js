/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncodeForLoop(word) {
  const newWord = [];
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) newWord.push("(");
    else newWord.push(")");
  }
  return newWord.join("");
}

function duplicateEncodeMethods(word) {
  return word
    .toLowerCase()
    .split("")
    .map((c, i, arr) => (arr.indexOf(c) === arr.lastIndexOf(c) ? "(" : ")"))
    .join("");
}

// Optimized Method. Above functions are O(n2) since the indexof methods which are O(n) are nested within the map method which is also O(n)

function duplicateEncodeHash(word) {
  word = word.toLowerCase().split("");
  const cache = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    char in cache ? cache[char]++ : (cache[char] = 1);
  }

  return word.map((c) => (cache[c] > 1 ? ")" : "(")).join("");
}

console.log(duplicateEncodeHash("recede"), "()()()");
