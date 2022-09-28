/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
  return text
    .split("")
    .map((char) => {
      const charCode = char.toLowerCase().charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) return charCode - 96;
    })
    .filter((char) => char > 0)
    .join(" ");
}
