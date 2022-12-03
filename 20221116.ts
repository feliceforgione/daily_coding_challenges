/* Check if an anagram exists without using a hash map */

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA: string, stringB: string): boolean {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str: string): string {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
