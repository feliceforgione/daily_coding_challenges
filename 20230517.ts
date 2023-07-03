/* Write a function called `areAllCharactersUnique` that takes in a string and returns `true` or `false` depending on whether all characters in the string are unique (i.e., no character is repeated). 

*/

// Using Set
function areAllCharactersUniqueSetMethod(str: string): boolean {
  return new Set(str).size === str.length;
}

// Using Object
function areAllCharactersUnique(str) {
  const charObj = {};

  for (let char of str) {
    if (char in charObj) return false;
    charObj[char] = true;
  }

  return true;
}
