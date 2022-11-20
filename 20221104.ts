/* Check whether the given string is a subsequence of the plaintext alphabet.

Example

For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false

For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true. */

function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charValues: number[] = chars.map((char) => char.charCodeAt(0));
  console.log(charValues);

  if (new Set(charValues).size != chars.length) return false;
  for (let i = 1; i < charValues.length; i++) {
    if (charValues[i - 1] >= charValues[i]) return false;
  }
  return true;
}
