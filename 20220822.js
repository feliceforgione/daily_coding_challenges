/*  
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
*/

function removeDuplicateWords(s) {
  const arr = s.split(" ");
  const arrSet = new Set(...arr);
  console.log(arrSet);
}

/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

*/

function digits(n) {
  return String(n).length;
}

/* 
 Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point. 
 */

const greet = (name) => {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

/*
  Sort a string of characters 
  */

function sortGiftCode(code) {
  return code.split("").sort().join("");
}

/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead 

Example of input: __nn_nnnn__n_n___n____nn__nnn

*/

function bump(x) {
  const numBumps = x.split("").filter((c) => c == "n").length;
  return numBumps <= 15 ? "WooHoo!" : "Car Dead";
}
