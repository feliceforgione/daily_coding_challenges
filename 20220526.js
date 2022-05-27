/* Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target. */

const linkedListFind = (head, targetVal) => {
  if (head === null) return false;
  if (head.val === targetVal) return true;

  return linkedListFind(head.next, targetVal);
};
