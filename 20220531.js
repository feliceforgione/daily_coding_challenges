/* Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let currIndex = 0;
  let current = head;

  while (current != null) {
    if (currIndex === index - 1) {
      newNode.next = current.next;
      current.next = newNode;
      return head;
    }
    currIndex++;
    current = current.next;
  }

  return head;
};
