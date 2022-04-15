// Find the vowels
// 
index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters). So given a string "super", we should return a list of [2, 4].

function vowelIndices(word){
  let vowels = "a e i o u y"
  return word.split('').map( (c, i) => {
    if (vowels.includes(c.toLowerCase())) return i+1
  } ).filter( c => c)
}
