const mostFrequentChar = (s) => {

  let hash = {}
  let frequency = 0;
  let freqChar;

  for (let char of s) {
    if (!(char in hash)) {
      hash[char] = 0
    }
    hash[char]++
  }

  for (let char in hash) {

    if ( hash[char] > frequency) {
      frequency = hash[char]
      freqChar = char;
    }
  }

return freqChar;  
}
