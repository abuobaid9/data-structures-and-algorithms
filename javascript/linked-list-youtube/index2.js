
/* Linked list Node*/
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

let head = new Node();    // head of list
function removeDuplicates() {
  /*Another reference to head*/
  let curr = head;

  /* Traverse list till the last node */
  while (curr != null) {
    let temp = curr;
    /*Compare current node with the next node and
    keep on deleting them until it matches the current
    node data */
    while (temp != null && temp.data == curr.data) {
      temp = temp.next;
      console.log('hi');
    }
    /*Set current node next to the next different
    element denoted by temp*/
    curr.next = temp;
    curr = curr.next;
  }
}
function deleteMid(head) {
  // Base cases
  if (head == null)
    return null;
  if (head.next == null) {
    return null;
  }

  // Initialize slow and fast pointers
  // to reach middle of linked list
  var slow_ptr = head;
  var fast_ptr = head;

  // Find the middle and previous of
  // middle.
  var prev = null;

  // To store previous of slow_ptr
  while (fast_ptr != null &&
    fast_ptr.next != null) {
    fast_ptr = fast_ptr.next.next;
    prev = slow_ptr;
    slow_ptr = slow_ptr.next;
  }

  // Delete the middle node
  prev.next = slow_ptr.next;

  return head;
}
/* Utility functions */

/* Inserts a new Node at front of the list. */
function push(new_data) {
  /* 1 & 2: Allocate the Node &
            Put in the data*/
  let new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

/* Function to print linked list */
function printList() {
  let temp = head;
  while (temp != null && temp.data) {

    console.log(temp.data + " ");
    temp = temp.next;
  }

}

/* Driver program to test above functions */
push(20)
push(15)
push(14)
push(13)
push(12)
push(11)


// console.log( printList());


// removeDuplicates();
deleteMid(11);

console.log(printList());
