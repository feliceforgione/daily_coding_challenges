// Create a user object that has private properties for username and password.

const _username = Symbol("Username");
const _password = Symbol("Password");

const user = {
  [_username]: "Phil",
  [_password]: "1234",
  age: 20,
};

console.log(user);

console.log(user._password);
