'use strict';
const BinaryTree = require('../lib/binary-tree');
// const BinarySearchTree = require('../lib/bst');
const Node = require('../lib/node');
// const BFS =require('../lib/bfs.js');
const fizzBuzzTree =require('../lib/tfb');
let tree = null;
// let searchTree =null;
describe('Binary Tree', () => {
  beforeAll(() => {
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
    // searchTree =new BinarySearchTree(one);
  });

  test('Can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });
  test('Can successfully instantiate an empty tree', () => {
    expect(tree.root.value).toEqual(1);
  });
  // test('can successfully add a left child and right child properly to a node', () => {
  //   let expectedOutput1 = [2];
  //   let expectedOutput2 = [3];
  //   let left=searchTree.left();
  //   let right=searchTree.right();
  //   expect(left).toEqual(expectedOutput1);
  //   expect(right).toEqual(expectedOutput2);

  // });
  test('preOrder', () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  test('inOrder', () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });
  test('postOrder', () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });
  test('Git Max Value', () => {
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
    let postOrder = tree.getMaxVal(one);
    expect(postOrder).toEqual(9);
  });
  // test('breadth first', () => {
  //   const testTree = new BFS();
  //   testTree.root = new Node("H");
  //   testTree.root.children.push(new Node("e"));
  //   testTree.root.children.push(new Node("l"));
  //   testTree.root.children[0].children.push(new Node("l"));
  //   testTree.root.children[0].children.push(new Node("o"));
  //   testTree.root.children[0].children.push(new Node("W"));
  //   testTree.root.children[1].children.push(new Node("o"));
  //   testTree.root.children[1].children.push(new Node("r"));
  //   testTree.root.children[1].children.push(new Node("l"));
  //   let test = testTree.traverseBFS();
  //   expect(test).toEqual('H e l l o w o r l');
  // });
  it('If the value is divisible by 3, replace the value with “Fizz”', () => {
    let value = new Node(3);
    let tree = new BinaryTree(value);
    let expextedTree = fizzBuzzTree(tree);
    expect(expextedTree.root.value).toEqual('Fizz');
  });

  it('If the value is divisible by 5, replace the value with “Buzz”', () => {
    let value = new Node(5);
    let tree = new BinaryTree(value);
    let expextedTree = fizzBuzzTree(tree);
    expect(expextedTree.root.value).toEqual('Buzz');
  });

  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => {
    let value = new Node(15);
    let tree = new BinaryTree(value);
    let expextedTree = fizzBuzzTree(tree);
    expect(expextedTree.root.value).toEqual('FizzBuzz');
  });

  it('If the value is not divisible by 3 or 5, simply turn the number into a String.', () => {
    let value = new Node(8);
    let tree = new BinaryTree(value);
    let expextedTree = fizzBuzzTree(tree);
    expect(expextedTree.root.value).toEqual(8);
  });
});
