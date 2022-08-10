'use strict';

const insertionSort = require('../index');

describe('Insertion Sort Test', () => {
  it('Sample arrays', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    insertionSort(arr);
    expect(arr).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
  it('Reverse-sorted', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    insertionSort(arr);
    expect(arr).toStrictEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    insertionSort(arr);
    expect(arr).toStrictEqual([5, 5, 5, 7, 7, 12]);
  });
  it('Nearly-sorted', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    insertionSort(arr);
    expect(arr).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });
});
