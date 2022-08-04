/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. */

const isIsomorphic = (s, t) => {
  const sMap = {};
  const tMap = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const mappedChar = t[i];
    if (char in sMap) {
      if (sMap[char] !== mappedChar || tMap[mappedChar] !== char) {
        return false;
      }
    } else if (mappedChar in tMap) {
      return false;
    } else {
      sMap[char] = mappedChar;
      tMap[mappedChar] = char;
    }
  }
  return true;
};
