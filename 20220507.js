// determine if a number is a square number
var isSquare = function(n){
    if (n == 0) return true
    if (n < 0) return false
    return n % Math.sqrt(n) == 0
  }