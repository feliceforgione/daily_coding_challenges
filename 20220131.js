/* Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated */

var Ghost = function () {
  const rand = Math.floor(Math.random() * 4);
  switch (rand) {
    case 0:
      this.color = "white";
      break;
    case 1:
      this.color = "yellow";
      break;
    case 1:
      this.color = "purple";
      break;
    default:
      this.color = "red";
  }
};
