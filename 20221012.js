/*
Translate the provided string to Pig Latin by following the rules below:
For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”


*/

function pigLatin(str) {
  const words = str.split(" ");
  const vowels = "aeiou";
  return str.split(" ").map((word) => {
    if (vowels.includes(word[0])) return `${word}way`;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (vowels.includes(char)) {
        return `${word.slice(i)}${word.slice(0, i)}ay`;
      }
    }
  });
}
