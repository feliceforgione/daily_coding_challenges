/* Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' */

// P: a single integer > 1
// R: if no divisor found will return 'intergervalue is prime' otherwise will return array of all the divisors
// E: divisors(12); // should return [2,3,4,6]
//     divisors(13); // should return "13 is prime"

/* loop from 2 to integer and check if current number is mod zero if so then add to array */

function divisors(integer) {
  const divs = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) divs.push(i);
  }
  return divs.length === 0 ? `${integer} is prime` : divs;
}
