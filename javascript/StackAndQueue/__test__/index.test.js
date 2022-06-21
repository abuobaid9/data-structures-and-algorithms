'use strict';

// Require linked list implementation
const Stack = require('../lib/Stack');
const Queue = require('../lib/Queue');

describe('Stac And Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  test('Can successfully push onto a stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    const result = newStack.peek();
    expect(result).toEqual(1);

  });
  test('Can successfully push multiple values onto a stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push('a');
    const result = newStack.peek();
    expect(result).toEqual('a');

  });

  test('Can successfully pop off the stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push('a');
    newStack.pop();
    const result = newStack.peek();
    expect(result).toEqual(4);

  });
  test('Can successfully empty a stack after multiple pops', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push('a');
    newStack.pop();
    newStack.pop();
    newStack.pop();
    const result = newStack.peek();
    expect(result).toEqual('Exception');

  });

  test('Can successfully peek the next item on the stack', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    const result = newStack.peek();
    expect(result).toEqual(3);
  });
  it('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack.top).toBeNull();
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    const newStack = new Stack();
    const result = newStack.peek();
    const result2 = newStack.pop();
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
