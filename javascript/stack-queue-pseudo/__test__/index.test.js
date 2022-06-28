'use strict';

// Require linked list implementation
const Queue = require('../lib/pseudoQueue');

describe('Stac And Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  test('Can successfully push multiple values onto a stack', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue('a');
    const result = newQueue.stack1.top.value;
    expect(result).toEqual('a');

  });
  test('Can successfully enqueue into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    const result = newQueue.stack1.top.value;
    expect(result).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    const result = newQueue.stack1.top.value;
    expect(result).toEqual(3);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    const result = newQueue.stack1.top.value;
    expect(result).toEqual(2);
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    const result = newQueue.stack1.top;
    expect(result).toEqual(null);
  });
  it('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();
    expect(newQueue.stack1.top).toBeNull();
  });
  it('Calling dequeue on empty queue raises exception', () => {
    const newQueue = new Queue();
    // const result = newQueue.stack1.top;
    const result2 = newQueue.dequeue();
    // expect(result).toBe('Exception');
    expect(result2).toBe('Exception');
  });
});
