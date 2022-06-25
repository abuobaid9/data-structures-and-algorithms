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
  insert(data) {
    this.head = new Node(data, this.head);
    // console.log(this.length);
    this.length++;

  }
  kth(k) {
    let current = this.head;
    let n = this.length - 1;
    let x = 0;

    while (current) {
      x = n - k + 1;
      if(k>n){
        return 'k is greater than the length of the linked list';
      }
      if (k===n){
        return 'k and the length of the list are the same';
      }
      if (k<1){
        return 'k is not a positive integer';
      }
      if (n ===1){
        return ' linked list size is 1';
      }
      for (let i = 0; i < x - k; i++) {
        current = current.next;
      }
      return console.log(current.data);
    }
    return console.log('length is zero');
  }
}
const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(66);
ll.insert(5);
ll.insert(6);
ll.kth(2);
module.exports = LinkedList;
