// You receive an array with your peers' test scores. Now calculate the average and compare your score!
function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce( (acc, num) => acc + num, 0) / classPoints.length) < yourPoints
}



// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

function rentalCarCost(d) {
  if ( d >= 7) {
    return d * 40 - 50
  } else if ( d >= 3) {
    return d * 40 -20
  } else {
    return d * 40
  }
}
 
