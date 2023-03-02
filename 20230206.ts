/* Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True. */

const mispelled = function (word1: string, word2: string): boolean {
  if (Math.abs(word1.length - word2.length) > 1) return false;
  if (~word1.indexOf(word2) || ~word2.indexOf(word1)) return true;
  return word1.split("").filter((e, i) => e != word2[i]).length == 1;
};
console.log(mispelled("versed", "verseda"));
