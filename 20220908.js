/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. 8?
*/

function high(str) {
  const words = str.split(" ");
  let highScore = 0;
  let highScoreWord = null;
  for (let word of words) {
    const currentWordScore = word
      .split("")
      .reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0);
    if (currentWordScore > highScore) {
      highScore = currentWordScore;
      highScoreWord = word;
    }
  }
  return highScoreWord;
}
