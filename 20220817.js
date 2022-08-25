/* You are given the head of a singly linked list. Write a function that will take the given head as input, reverse the linked list and return th new head of the reversed linked list */

const reverseSL = (head) => {
  let prevNode = null;
  let currNode = head;
  let nextNode;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};
