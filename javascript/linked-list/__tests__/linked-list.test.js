'use strict';

// Require linked list implementation
const LinkedList = require('../index');



describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  test('create a linklist', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
  test('insert to linklist works', () => {
    let list = new LinkedList();
    list.insert('a');
    expect(list.head.data).toEqual('a');
    list.insert('two');
    expect(list.head.data).toEqual('two');
    list.insert('8');
    list.insert('9');
    list.insert('10');
    expect(list.head.data).toEqual('10');
  });
  test('if it found return true ', () => {
    let list = new LinkedList();
    list.insert('a');
    var result = list.includes('a');
    expect(result).toBe(true);

  });
  test('if it not found return false ', () => {
    let list = new LinkedList();
    list.insert('b');
    var result = list.includes('a');
    expect(result).toBe(false);

  });
  test('show all data', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    var result = list.tooString();
    expect(result).toBe(/* {c}->
    {b}->
    {a}->
     NULL */);
  });


});
