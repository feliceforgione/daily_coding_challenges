/* count all vowels in a string. Do it two ways */

function vowelsCounter(text) {
  const vowels = "aeiou";
  let vowelCount = 0;
  for (let char of text) {
    if (vowels.includes(char.toLowerCase())) vowelCount++;
  }
  return vowelCount;
}

function vowelsCounter(text) {
  return text.match(/[aeiou]/gi).length;
}
