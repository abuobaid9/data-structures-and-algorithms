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
});
