//Return the number (count) of vowels in the given string.

function getCount(str) {  
  const vowels = ['a', 'e', 'i','o','u']  
  return str.split('').filter( c => vowels.includes(c)).length 
  
}
