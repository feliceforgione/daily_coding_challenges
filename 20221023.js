/* Create a html form that convert the text found in a textarea to include random words three preset array lists when a button is pressed */

// dom elements
const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

// flavours
const flavours = {
  ninja: ["dojo", "shogun", "shinobi", "samuri", "shuriken"],
  pokemon: ["pika", "pokeball", "pokedex", "evolve", "ash", "gym"],
  space: ["universe", "galaxy", "telescope", "comet", "stars"],
};

// functions
const flavourize = (inputText, flavour) => {
  const flavourArr = flavours[flavour];
  const flavourArrLength = flavourArr.length;
  console.log(flavourArr);

  return inputText
    .split(" ")
    .map((word, i) => {
      if ((i + 1) % 3 === 0)
        return flavourArr[Math.floor(Math.random() * flavourArrLength)];
      return word;
    })
    .join(" ");
};

const updateOutput = (text) => {
  output.innerHTML = text;
};

// event listener
buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    const flavour = e.target.dataset.flavour;
    const inputText = textarea.value;
    updateOutput(flavourize(inputText, flavour));
  });
});
