// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
  if (month < 4) return 1
  else if (month < 7) return 2
  else if (month < 10) return 3
  else if (month < 13) return 4
  else return 'not a month'  
}

// create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
function isDivideBy(number, a, b) {
  return ((number % a === 0) && (number % b === 0))
}


// Your task is to find the first element of an array that is not consecutive.
function firstNonConsecutive (arr) {
  let arrlength = arr.length;
  if (arrlength === 0 || arrlength === 1) return null
  for (let i = 1; i < arrlength; i++) {
    if (!((arr[i-1] + 1) === arr[i])) return arr[i]
  }
  return null
}
