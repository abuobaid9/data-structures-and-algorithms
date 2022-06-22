'use strict';
const Node = require('./Node');
class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    if (this.front === null || this.length === 0) {
      return true;
    } else {
      return false;
    }

  }
  enqueue(value) {

    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
    }
  }
  dequeue() {

    if (this.isEmpty()) {
      return 'Exception';
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.length += 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length += 1;
    }
  }
  pop() {
    if (this.isEmpty()) {
      return 'Exception';
    }
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length -= 1;
    return temp.value;
  }
  peek() {
    // i do care only about the front
    if (this.isEmpty()) {
      return 'Exception';
    }
    return this.front.value;
  }

}
module.exports = PseudoQueue;
