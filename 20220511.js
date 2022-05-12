// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let arr = str.split('')
    let  x = arr.filter( c => c.toLowerCase() === 'x').length
  let  o = arr.filter( c => c.toLowerCase() === 'o').length
  return ( x == o)
}