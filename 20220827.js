/* Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

const getAverageAge = (users) => {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
};

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

/*Create a function unique(arr) that should return an array with unique items of arr.*/

function unique(arr) {
  const uniqueArr = [];
  arr.forEach((item) =>
    uniqueArr.includes(item) ? null : uniqueArr.push(item)
  );
  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O

/* Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

:*/

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (users) => {
  const obj = {};
  users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, obj);
  return obj;
};

let usersById = groupById(users);
console.log(usersById);
/*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
