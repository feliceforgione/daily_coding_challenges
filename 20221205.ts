// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

class Queue {
  data: any[];
  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.push(record);
  }

  remove() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }
}

function weave(sourceOne: Queue, sourceTwo: Queue): Queue {
  const thirdQueue = new Queue();

  while (sourceOne.peek() != null && sourceTwo.peek() != null) {
    thirdQueue.add(sourceOne.remove());
    thirdQueue.add(sourceTwo.remove());
  }
  if (sourceOne.peek() != null) {
    while (sourceOne.peek() != null) {
      thirdQueue.add(sourceOne.remove());
    }
  }
  if (sourceTwo.peek() != null) {
    while (sourceTwo.peek() != null) {
      thirdQueue.add(sourceTwo.remove());
    }
  }
  return thirdQueue;
}

const one = new Queue();
one.add(1);
one.add(2);
one.add(3);
one.add(4);
one.add(5);
one.add(6);
const two = new Queue();
two.add("one");
two.add("two");
two.add("three");
two.add("four");

const result = weave(one, two);
