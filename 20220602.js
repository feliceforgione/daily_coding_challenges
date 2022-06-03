// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// P: string
// R: string
// E:  "This is an example!" ==> "sihT si na !elpmaxe"
// PC: split into array
//     map each word and split->reverse->join
//      join mapped array with a space

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
