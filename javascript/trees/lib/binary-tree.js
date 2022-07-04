'use strict';
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  //root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {

      // if left go left
      if (node.left) traverse(node.left);
      result.push(node.value);
      // if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  //left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {

      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  getMaxVal(node) {

    if (node === null)
      return Number.MIN_VALUE;

    let res = node.value;
    let lres = this.getMaxVal(node.left);
    let rres = this.getMaxVal(node.right);

    if (lres > res)
      res = lres;
    if (rres > res)
      res = rres;
    return res;
  }
}

module.exports = BinaryTree;
