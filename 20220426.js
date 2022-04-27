// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  let doubleStr = []
  for (char of str) {
    doubleStr.push(char)
    doubleStr.push(char)
  }
  return doubleStr.join('')
}


// Sum without highest and lowest number
function sumArray(array) {
  if (array == null) return 0
  if (array.length < 3) return 0
  return array.reduce( (acc, num) => acc + num, 0) - Math.max(...array) - Math.min(...array)
}
