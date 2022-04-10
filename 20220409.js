
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.Return the average of the given array rounded down to its nearest integer

function getAverage(marks){
  return Math.floor(marks.reduce( (acc, n) => acc + n, 0)/ marks.length)
}


// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
