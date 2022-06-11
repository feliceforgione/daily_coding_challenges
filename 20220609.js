/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

// P: string
// R: String
// E:  "Hey fellow warriors" => "Hey wollef sroirraw")
/* 
    convert string to array
    map thru array
    if word length is greater than 4 then convert word to array of letters and reverse
    convert mapped array to string
*/

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}
