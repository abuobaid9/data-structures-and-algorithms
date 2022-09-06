class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== index - 1) {
        current = current.next;
        counter++;
      }
      let preNode = current;
      let removed = preNode.next;
      preNode.next = removed.next;
      this.length--;
      return removed;
    }
  }
  deleteMid() {
    var current = this.head;
    if (current !== null) {
      current.val=current.next.val;
      current.next=current.next.next;
      console.log(current);
      return current;
    }
    return false;
  }

  trueFalse(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
        console.log(true);
        return true;
      }
      current = current.next;
    }
    console.log(false);
    return false;
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
let ll = new LinkedList();
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
// ll.push(7);
// ll.push(8);
// ll.push(6);
// ll.remove(2);
// ll.printMidleNode();
console.log(ll.printMidleNode());
// ll.print();
// ll.trueFalse(2);
// console.log(ll);
