// Make a program that filters a list of strings and returns a list with only your friends name in it.If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends) {
  return friends.filter((name) => name.length == 4);
}

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
  const arr = [a, b, c];
  let [sa, sb, sc] = arr.sort((a, b) => a - b);
  return sa + sb > sc;
}