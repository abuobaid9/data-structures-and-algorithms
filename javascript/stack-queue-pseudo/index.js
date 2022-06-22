const PseudoQueue = require('./lib/pseudoQueue');

const newQueue = new PseudoQueue();

newQueue.push(10);
newQueue.push(15);
newQueue.push(20);
console.log(newQueue.peek());
newQueue.pop();
newQueue.pop();
console.log(newQueue.peek());
newQueue.pop();
newQueue.pop();
console.log(newQueue.peek());
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log('front is ', newQueue.peek());
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
console.log('front is ', newQueue.peek());
