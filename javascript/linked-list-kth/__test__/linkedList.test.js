'use strict';

// Require linked list implementation
const LinkedList = require('../index');



describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  test('Where k is greater than the length of the linked list',()=>{
    let list = new LinkedList();
    list.insert(1);
    list.insert(1);
    list.insert(1);
    list.insert(1);
    let result=list.kth(5);
    expect(result).toEqual('k is greater than the length of the linked list');
  });
  test('Where k and the length of the list are the same', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    let result=list.kth(3);
    expect(result).toBe('k is greater than the length of the linked list');
  });
  test('Where k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    let result=list.kth(-1);
    expect(result).toBe('k is not a positive integer');
  });
  test('Where the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.insert('a');
    let result=list.kth(1);
    expect(result).toBe('k is greater than the length of the linked list');
  });
  test('where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    let result=list.kth(2);
    expect(result).toBe('k and the length of the list are the same');
  });
});
