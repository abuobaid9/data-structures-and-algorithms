'use strict';

const quickSort = require('../index');

describe('Insertion Sort Test', () => {
  it('Sample arrays', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let n = arr.length;
    quickSort(arr, 0, n - 1);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('Reverse-sorted', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let n = arr.length;
    quickSort(arr, 0, n - 1);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let n = arr.length;
    quickSort(arr, 0, n - 1);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('Nearly-sorted', () => {
    let arr = [2, 3, 5, 7, 13, 11];

    let n = arr.length;
    quickSort(arr, 0, n - 1);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});

