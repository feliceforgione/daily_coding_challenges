// square every digit of a number and concatenate them.

function squareDigits(num){
  return Number(String(num).split('').map( num => num * num).join(''))
}

//Array plus array 
// sum of all elements in two arrays

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce( (acc, n) => acc + n, 0)
}
