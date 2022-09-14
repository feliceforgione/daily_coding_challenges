/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  
*/
function duplicateEncode(word) {
  const map = new Map();
  const wordArr = word.split("");
  const encodedArr = [];
  for (let val of wordArr) {
    val = val.toLowerCase();

    if (map.has(val)) map.set(val, ")");
    else map.set(val, "(");
  }

  return wordArr.map((val) => map.get(val.toLowerCase())).join("");
}
