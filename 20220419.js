// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
  return x.reduce( (acc, num) => acc + Number(num), 0)
}

// RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('!').join('')
}
