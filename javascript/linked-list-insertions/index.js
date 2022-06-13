class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  append(data) {

    var new_node = new Node(data);

    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    new_node.next = null;
    var last = this.head;
    while (last.next !== null)
      last = last.next;
    last.next = new_node;
    return;
  }
  insertBefore(data, newData) {
    let newNode = new Node(newData);
    let current = this.head;
    let previousNode = null;
    while (current) {
      if (current.data === data) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = current;
        } else {
          previousNode.next = newNode;
          newNode.next = current;
        }
        this.length++;
        return;
      }
      previousNode = current;
      current = current.next;
    }
  }
  insertAfter(data, newData) {
    let new_node = new Node(newData);
    let current = this.head;
    while (current) {
      if (current.data === data) {
        new_node.next = current.next;
        current.next = new_node;
        this.length++;
        return;
      }
      current = current.next;
    }
  }


  tooString() {
    let current = this.head;
    while (current) {
      //current.data
      console.log(`{${current.data}}->`);
      current = current.next;
    }
    return console.log(' NULL');
  }

}
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.insertAfter(2, 4);
ll.append(6);
ll.insertBefore(1,8);
ll.tooString();

module.exports = LinkedList;
