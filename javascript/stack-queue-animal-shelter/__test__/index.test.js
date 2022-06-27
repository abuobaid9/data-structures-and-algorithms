'use strict';

const AnimalShelter = require('../index');

describe(' AnimalShelter', () => {
  it('enqueue in AnimalShelter', () => {
    const newAnimal = new AnimalShelter();
    const dogSheleter = { type: 'dog' };
    const catShelter = { type: 'cat' };
    newAnimal.enqueue(catShelter);
    expect(newAnimal.counter).toEqual(1);
    newAnimal.enqueue(dogSheleter);
    expect(newAnimal.enqueue({ type: 'lion' })).toEqual(null);
  });
  it(' dequeue from AnimalShelter', () => {
    const newAnimal = new AnimalShelter();
    const dogSheleter = { type: 'dog' };
    const catShelter = { type: 'cat' };
    newAnimal.enqueue(catShelter);
    newAnimal.enqueue(dogSheleter);
    expect(newAnimal.dequeue('cat')).toEqual(catShelter);
    newAnimal.dequeue('cat');
    expect(newAnimal.dequeue('cat')).toEqual('Exception');
    newAnimal.dequeue('dog');
    newAnimal.dequeue('dog');
    expect(newAnimal.dequeue('dog')).toEqual('Exception');
  });
});
