/* find the longest word in a sentence. Do it three ways */

// Using Loop
function longestWord(text) {
  const wordArr = text.split(" ");
  let maxWordLength = 0;
  let maxWord = null;
  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];
    if (word.length > maxWordLength) {
      maxWord === word;
      maxWordLength === word.length;
    }
  }
  return maxWord;
}

//Using sort
function longestWord(text) {
  const wordArr = text.split(" ");
  return wordArr.sort((a, b) => b.length - a.length)[0];
}

//Using Reduce
function longestWord(text) {
  return text.split(" ").reduce((longest, word) => {
    if (word.length > longest.length) return word;
    return longest;
  }, "");
}
