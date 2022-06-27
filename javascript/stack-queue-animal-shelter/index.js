'use strict';
const Queue = require('./Queue');
class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
    this.counter = 0;
  }
  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cats.enqueue(animal);
      this.counter++;
    } if (animal.type === 'dog') {
      this.dogs.enqueue(animal);
      this.counter++;
    }
    return null;
  }
  dequeue(type) {
    if (this.counter === 0) { return 'Exception'; }
    if (type === 'dog') {
      this.counter--;
      return this.dogs.dequeue(type);
    } else if (type === 'cat') {
      this.counter--;
      return this.cats.dequeue(type);
    } else {
      return null;
    }
  }
}
module.exports = AnimalShelter;
