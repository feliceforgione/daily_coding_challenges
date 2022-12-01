// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA: string, stringB: string): boolean {
  const cleanStrA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const cleanStrB = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (cleanStrA.length !== cleanStrB.length) return false;
  const charMapA = createCharMap(cleanStrA);
  const charMapB = createCharMap(cleanStrB);

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) return false;
  }
  return true;
}

function createCharMap(str: string): object {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char]++ || 1;
  }
  return charMap;
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
