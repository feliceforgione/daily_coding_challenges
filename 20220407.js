// Disemvowel Trolls
// takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  str = str.split('').filter( c => {
    return !vowels.includes(c.toLowerCase())
  }).join('')
  
  return str;
}



// Find Multiples of a Number
// takes a value, integer , and returns a list of its multiples up to another value, limit 
function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}
