// return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
  let len = s.length
  if (len % 2 === 0) {
    return `${s[len/2 - 1]}${s[len/2 ]}`
  } else {
    return s[Math.floor(len/2)]
  }
}
