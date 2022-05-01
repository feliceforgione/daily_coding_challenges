//Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.


const intersection = (a, b) =>  {
    let mySet = new Set();
    let both = []
    for (let num of a) {
      mySet.add(num);
    }
    for (let num of b) {
      if (mySet.has(num)) both.push(num)
    }
    return both
  }