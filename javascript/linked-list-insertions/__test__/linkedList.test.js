'use strict';

// Require linked list implementation
const LinkedList = require('../index');



describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  // test('create a linklist', () => {
  //   let list = new LinkedList();
  //   expect(list.head).toBeNull();
  // });

  test('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    var result = list.tooString();
    expect(result).toBe(/* {a}->
    {b}->
    {c}->
     NULL */);
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append('a');
    expect(list.head.data).toEqual('a');
    list.append('two');
    expect(list.head.data).toEqual('a');
    list.append('8');
    list.append('9');
    list.append('10');
    var result = list.tooString();
    expect(result).toEqual(/* {a}->
    {two}->
    {8}->
    {9}->
    {10}->
    NULL */);
  });
  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.insertBefore('c', 'f');
    var result = list.tooString();
    expect(result).toEqual(/* {a}->
    {b}->
    {f}->
    {c}->
    {d}->
     NULL*/);

  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.insertBefore('a', 'f');
    var result = list.tooString();
    expect(result).toEqual(/* {f}->
    {a}->
    {b}->
    {c}->
    {d}->
     NULL*/);
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.insertAfter('b', 'f');
    var result = list.tooString();
    expect(result).toEqual(/* {a}->
    {b}->
    {f}->
    {c}->
    {d}->
     NULL*/);
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.insertAfter('d', 'f');
    var result = list.tooString();
    expect(result).toEqual(/* {a}->
    {b}->
    {c}->
    {d}->
    {f}->
     NULL*/);
  });

});
