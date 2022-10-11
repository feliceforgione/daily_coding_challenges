/* Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.


'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase


'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
'Example: 0 number or punctuation changes'
*/

function reverseAlpha(str) {
  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122)
        return String.fromCharCode(26 - (charCode - 97) + 65 - 1);
      else if (charCode >= 65 && charCode <= 90)
        return String.fromCharCode(26 - (charCode - 65) + 97 - 1);
      else return char;
    })
    .join("");
}
