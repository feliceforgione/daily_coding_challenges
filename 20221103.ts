/* Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz". */

function alphabet_char_Shift(str: string): string {
  var all_chars = str.split("");
  for (var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt(0) - "a".charCodeAt(0);
    n = (n - 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt(0));
  }
  return all_chars.join("");
}
