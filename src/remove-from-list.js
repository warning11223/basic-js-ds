const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
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

const test = new Queue();
test.enqueue(3);
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(4);
test.enqueue(5);


function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');

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


  }

  const test = new Queue();

  let current = l;

  while(current) {
    if (current.value !== k) {
      test.enqueue(current.value);
    }
    current = current.next;
  }

  return test.getUnderlyingList()

}

console.log(removeKFromList(test.getUnderlyingList(), 3))

module.exports = {
  removeKFromList
};
