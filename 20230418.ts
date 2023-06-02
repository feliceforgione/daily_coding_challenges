/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

function generateHashtag(str: string): string | boolean {
  const maxLength = 140;
  if (str.length == 0) return false;
  const words = str.split(" ");
  const hashedWords = words
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  const hashedWordsLength = hashedWords.length;
  return hashedWordsLength > 0 && hashedWordsLength < maxLength
    ? `#${hashedWords}`
    : false;
}

const str = "    hello     World   ";

console.log(generateHashtag(str));
