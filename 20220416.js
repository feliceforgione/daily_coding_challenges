
// You need a function to handle each change from green, to yellow, to red, and then to green again.
function updateLight(current) {  
  if (current === 'green') return 'yellow'
  else if (current === 'yellow') return 'red'
  else return 'green'
}

//finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3
  if (avg < 60) return 'F'
  else if (avg < 70) return 'D'
  else if (avg < 80) return 'C'
  else if (avg < 90) return 'B'
  else return 'A'
}

//takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor(s * 1000 / 60 * 100 /  60)
}
