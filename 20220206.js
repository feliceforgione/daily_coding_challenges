// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  const vowels = [..."aeiou"];
  return string
    .split("")
    .filter((c) => !vowels.includes(c))
    .join("");
}
