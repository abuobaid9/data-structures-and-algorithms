'use strict';
const Node =require('./node');
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else {
      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }

}

module.exports = BinarySearchTree;
