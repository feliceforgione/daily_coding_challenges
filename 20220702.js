/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the title of this question). Spaces will be included only when more than one word is present. */

/* spin_words("Hey fellow Le Wagon alumni") => "Hey wollef Le nogaW inmula" */

function spin_words(str) {
  const punctuation = [",", ".", "!", "?"];
  return str
    .split(" ")
    .map((word) => {
      if (word.length < 5) return word;
      const lastchar = word[word.length - 1];
      if (punctuation.includes(lastchar)) {
        if (word.length > 5)
          return (
            word.split(lastchar)[0].split("").reverse().join("") + lastchar
          );
        return word;
      }
      return word.split("").reverse().join("");
    })
    .join(" ");
}
