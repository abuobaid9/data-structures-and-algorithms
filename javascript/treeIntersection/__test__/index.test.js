'use strict';

let Node = require('../../trees/lib/node');
let BinaryTree = require('../../trees/lib/binary-tree');
let tree_intersection = require('../intersection');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
one.left = two;
one.right = three;
two.left = four;

let tree1 = new BinaryTree(one);
let tree2 = new BinaryTree(one);

describe('Tree intersection', () => {
  it('tree_intersection ', () => {
    expect(tree_intersection(tree1, tree2)).toStrictEqual([4,2,3,1]);
  });
});
