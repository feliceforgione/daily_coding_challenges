const anagrams = (s1, s2) => {
    if (s1.length != s2.length) return false
  
    let hashS1 = {}
    let hashS2 = {}
  
    for(let i = 0; i < s1.length; i++) {
      createHash(s1[i], hashS1);
      createHash(s2[i], hashS2);
    }  
  
    for (const prop in hashS1) {
  
      if (hashS1[prop] !== hashS2[prop]) {console.log('not equal'); return false}
    }
  
    return true
  }
  
  function createHash(letter, hash) {
    if (hash[letter]) {
      hash[letter]++
    }
    else {
      hash[letter] = 1
    }
  }