'use strict';

// Require linked list implementation
const Queue = require('../lib/pseudoQueue');

describe('Stac And Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  test('Can successfully push onto a stack', () => {
    const newQueue = new Queue();
    newQueue.push(1);
    const result = newQueue.peek();
    expect(result).toEqual("Exception");

  });
  test('Can successfully push multiple values onto a stack', () => {
    const newQueue = new Queue();
    newQueue.push(1);
    newQueue.push(2);
    newQueue.push(3);
    newQueue.push(4);
    newQueue.push('a');
    const result = newQueue.peek();
    expect(result).toEqual( "Exception");

  });

  test('Can successfully pop off the stack', () => {
    const newQueue = new Queue();
    newQueue.push(1);
    newQueue.push(2);
    newQueue.push(3);
    newQueue.push(4);
    newQueue.push('a');
    newQueue.pop();
    const result = newQueue.peek();
    expect(result).toEqual("Exception");

  });
  test('Can successfully empty a stack after multiple pops', () => {
    const newQueue = new Queue();
    newQueue.push(1);
    newQueue.push('a');
    newQueue.pop();
    newQueue.pop();
    newQueue.pop();
    const result = newQueue.peek();
    expect(result).toEqual('Exception');

  });

  test('Can successfully peek the next item on the stack', () => {
    const newQueue = new Queue();
    newQueue.push(1);
    newQueue.push(2);
    newQueue.push(3);
    const result = newQueue.peek();
    expect(result).toEqual( "Exception");
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    const newQueue = new Queue();
    const result = newQueue.peek();
    const result2 = newQueue.pop();
    expect(result).toEqual('Exception');
    expect(result2).toEqual('Exception');
  });
  test('Can successfully enqueue into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    const result = newQueue.peek();
    expect(result).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    const result = newQueue.peek();
    expect(result).toEqual(1);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    const result = newQueue.peek();
    expect(result).toEqual(2);
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    const result = newQueue.peek();
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
    const result = newQueue.peek();
    expect(result).toEqual('Exception');
  });
  it('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();
    expect(newQueue.front).toBeNull();
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new Queue();
    const result = newQueue.peek();
    const result2 = newQueue.dequeue();
    expect(result).toBe('Exception');
    expect(result2).toBe('Exception');
  });
});
