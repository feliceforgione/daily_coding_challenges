/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

const groupAnagrams = (arr) => {
  const alphabetizedHashMap = {};
  const groupedAnagrams = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let alphabetizedWord = word.split("").sort().join("");
    if (alphabetizedWord in alphabetizedHashMap) {
      alphabetizedHashMap[alphabetizedWord].push(word);
    } else {
      alphabetizedHashMap[alphabetizedWord] = [word];
    }
  }
  for (group in alphabetizedHashMap) {
    groupedAnagrams.push(alphabetizedHashMap[group]);
  }
  return groupedAnagrams;
};
