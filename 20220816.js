/* You are given the head of sorted singly linked list. Write a function that will take the given head as input, delete all nodes that have a balue that is already the value of another node so that each value appears 1 time only and return the linked list */

const removeDuplicates = (head) => {
  let curr = head;
  while (curr) {
    let nextDistinct = curr.next;
    while (nextDistinct != null && curr.val == nextDistinct.val) {
      nextDistinct = nextDistinct.next;
    }
    curr.next = nextDistinct;
    curr = nextDistinct;
  }
  return head;
};
