'use strict';
const BinaryTree = require('./lib/binary-tree');
const Node = require('./lib/node');
const BinarySearchTree = require('./lib/bst');

var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
console.log(BST);

let tree = null;
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

console.log(tree.getMaxVal(one));



let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


let postOrder = tree.postOrder();
console.log('post order: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1
