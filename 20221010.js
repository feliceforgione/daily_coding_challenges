/* Given two strings, write an algorithm to check if they are anagrams of each other. Return true if they pass the test and false if they don't. Solve two ways.
 */

// Using sort
function isAnagram(stringA, stringB) {
  function sanitizeString(str) {
    const regex = new RegExp("[^a-zd]", "g");
    return str.toLowerCase().replace(regex, "");
  }

  if (stringA.length != stringB.length) return false;

  return (
    sanitizeString(stringA).split("").sort().join("") ===
    sanitizeString(stringB).split("").sort().join("")
  );
}

// Using maps
function isAnagram(stringA, stringB) {
  function sanitizeString(str) {
    const regex = new RegExp("[^a-zd]", "g");
    return str.toLowerCase().replace(regex, "");
  }

  function createMap(str) {
    const map = {};
    for (let char of str) {
      if (char in map) map[char]++;
      else map[char] = 1;
    }
    return map;
  }

  if (stringA.length != stringB.length) return false;

  const stringAMap = createMap(sanitizeString(stringA));
  const stringBMap = createMap(sanitizeString(stringB));

  for (char in stringAMap) {
    if (stringAMap[char] != stringBMap[char]) return false;
  }
  return true;
}
