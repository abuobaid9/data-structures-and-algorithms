class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;

  }
  pop() {
    let current = this.head;
    if (!current) {
      return false;
    }
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head === null) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {

      this.tail = null;
    }

    return currentHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;

    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) {
      this.push(val);
    }
    if (index === 0) {
      this.unShift(val);
    }
    let newNode = new Node(val);
    let previousNode = this.get(index );
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  deleteMid() {
    if (this.head === null)
      return null;
    if (this.head.next === null) {
      return null;
    }
    var slow_ptr = this.head;
    var fast_ptr = this.head;
    var prev = null;
    while (fast_ptr !== null &&
      fast_ptr.next !== null) {
      fast_ptr = fast_ptr.next.next;
      prev = slow_ptr;
      slow_ptr = slow_ptr.next;
    }
    prev.next = slow_ptr.next;
    return this;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
module.exports = SinglyLinkedList;

let ll = new SinglyLinkedList();
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
ll.push(7);

ll.pop();
// ll.shift();
// ll.unShift(1);
// console.log(ll.get(1));
// ll.set(1, 'hi');
// ll.insert(2, 'me');
// ll.pop();
// ll.remove(0);
// // console.log(ll);
// ll.print();

// ll.reverse();
// ll.deleteMid();
ll.print();

