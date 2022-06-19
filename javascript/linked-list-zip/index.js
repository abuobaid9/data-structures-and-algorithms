class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  push(head_ref, new_data) {
    let new_node = new Node();
    new_node.data = new_data;
    new_node.next = (head_ref);
    (head_ref) = new_node;
    return head_ref;

  }

  printList(value) {
    let temp = value;
    while (temp !== null) {
      console.log(temp.data + ' ');
      temp = temp.next;
    }
    console.log('<br>');
  }
  zipLists(p, q) {
    let p_curr = p;
    let q_curr = q;
    let p_next, q_next;

    while (p_curr !== null && q_curr !== null) {
      p_next = p_curr.next;
      q_next = q_curr.next;

      q_curr.next = p_next;
      p_curr.next = q_curr;

      p_curr = p_next;
      q_curr = q_next;
    }

    q = q_curr;
    return q;
  }
}
const ll = new LinkedList();
let p = null, q = null;
p = ll.push(p, 3);
p = ll.push(p, 2);
p = ll.push(p, 1);
ll.printList(p);
q = ll.push(q, 8);
q = ll.push(q, 7);
q = ll.push(q, 6);
q = ll.push(q, 5);
q = ll.push(q, 4);
ll.printList(q);
q =ll.zipLists(p, q);
ll.printList(p);
ll.printList(q);

module.exports = LinkedList;
