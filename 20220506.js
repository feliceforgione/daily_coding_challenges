// given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  let arr = numbers.split(' ')
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return `${max} ${min}`
}
