/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

function cleanString(s: string): string {
  const output: string[] = [];
  for (let char of s) {
    char === "#" ? output.pop() : output.push(char);
  }
  return output.join("");
}

console.log(cleanString("abc#d##c"));
