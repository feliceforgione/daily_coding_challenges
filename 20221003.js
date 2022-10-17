/*  create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function. */

function randomizeArray(arr) {
  const maxIndex = arr.length;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  for (let i = 0; i < 9; i++) {
    let random1 = getRandomInt(maxIndex);
    let random2 = getRandomInt(maxIndex);
    let random3 = getRandomInt(maxIndex);
    let random4 = getRandomInt(maxIndex);
    [arr[random1][random2], arr[random3][random4]] = [
      arr[random3][random4],
      arr[random1][random2],
    ];
  }
}
