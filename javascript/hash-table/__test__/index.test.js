'use strict';
const HashTable = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  test('Setting a key/value', () => {
    const ht = new HashTable();
    ht.set("France", 111);
    expect(ht.get("France")).toEqual(111);
  });

  test('Retrieving based on a key returns the value stored', () => {
    const ht = new HashTable();
    ht.set("France", 111);
    expect(ht.contains("France")).toEqual(true);
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const ht = new HashTable();
    expect(ht.get("France")).toEqual(null);
  });
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const ht = new HashTable();
    ht.set("France", 111);
    ht.set("Spain", 150);
    ht.set("ǻ", 192);
    expect(ht.display()).toEqual(/* 83: [ France: 111 ]
    126: [ Spain: 150 ],[ ǻ: 192 ] */);
  });
  test('Successfully  remove a key', () => {
    const ht = new HashTable();
    ht.set("France", 111);
    ht.remove('France');
    expect(ht.contains("France")).toEqual(false);
  });
});
