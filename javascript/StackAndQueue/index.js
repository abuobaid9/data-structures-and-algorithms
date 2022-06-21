const Stack = require('./lib/Stack');
const Queue = require('./lib/Queue');

const newStack = new Stack();
const newQueue = new Queue();

newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.peek());//3
newStack.pop();
newStack.pop();
console.log(newStack.peek());//1
newStack.pop();
newStack.pop();
console.log(newStack.peek());//
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log('front is ', newQueue.peek());
newQueue.dequeue();
console.log('front is ', newQueue.peek());
