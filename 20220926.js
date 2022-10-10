/* Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string. */

function removeXthChar(str, position) {
  return str
    .split("")
    .filter((char, ind) => (ind + 1) % position)
    .join("");
}
