'use strict';

// Require linked list implementation
const LinkedList = require('../index');



describe('Linked List', () => {
  let p = null, q = null;
  it('works', () => {
    expect(true).toBeTruthy();
  });
  test('Zip two lists together equal ', () => {
    let ll = new LinkedList();
    p = ll.push(p, 3);
    p = ll.push(p, 2);
    p = ll.push(p, 1);
    ll.printList(p);
    q = ll.push(q, 6);
    q = ll.push(q, 5);
    q = ll.push(q, 4);
    ll.printList(q);
    q =ll.zipLists(p, q);
    ll.printList(p);
    ll.printList(q);

    expect(ll.printList()).toEqual(/*1
    2
    3
    <br>
    4
    5
    6
    7
    8
    <br>
    1
    4
    2
    5
    3
    6
    <br> */);
  });
  test('Zip two lists together not equal ', () => {
    let ll = new LinkedList();
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

    expect(ll.printList()).toEqual(/*1
    2
    3
    <br>
    4
    5
    6
    7
    8
    <br>
    1
    4
    2
    5
    3
    6
    <br>
    7
    8
    <br> */);
  });
});

