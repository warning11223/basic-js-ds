const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    return this.head
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    if (this.head === null) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);

    }
    this.length++;

  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    if (this.length < 0) {
      return;
    }

    let current = this.head;
    this.head = current.next;

    return current.value;

  }

}

const queue = new Queue();

queue.enqueue(7); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.enqueue(4); // adds the element to the queue
queue.enqueue(5); // adds the element to the queue


console.log(queue.dequeue())
console.log(queue.getUnderlyingList())


module.exports = {
  Queue
};
