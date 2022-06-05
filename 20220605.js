// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// P: two strings
// R: boolean

/* Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

/*
PC:  slice first string by length of ending using -length
compare if strings are same
have edge case if ending lenght is zero
*/

function solution(str, ending) {
  if (ending.length === 0) return true;
  return str.slice(-ending.length) === ending;
}
