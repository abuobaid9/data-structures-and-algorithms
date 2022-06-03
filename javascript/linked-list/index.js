class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    this.head = new Node(data, this.head);
  }
  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        console.log(true);
        return true;

      }
      current = current.next;
    }
    console.log(false);
    return false;
  }
  tooString() {
    let current = this.head;
    while (current) {
      //current.data
      console.log(`{${current.data}}->`);
      current = current.next;
    }
    return console.log(" NULL");
  }
}
const ll = new LinkedList();
ll.insert("a");
ll.insert("b");
ll.insert("c");

ll.includes(200);
ll.tooString();

module.exports = LinkedList;
