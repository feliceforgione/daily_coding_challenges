/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE" */

function stringTransformer(str: string): string {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

console.log(stringTransformer(" Example   Input  "));
