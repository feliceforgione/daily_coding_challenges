//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSums(a, b) {
    return ((a.reduce( (acc, num) => acc + num * num, 0)) > (b.reduce( (acc, num) => acc + Math.pow(num, 3), 0)))
  
  
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).


function arrIndexMultiple(arr) {
    return arr.filter( (num, i) => {
        if (num % i == 0) return num
    })
}
  
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function arrInts(arr) {
    return arr.reduce( (acc, num) => acc + Number(num), 0 )
}
