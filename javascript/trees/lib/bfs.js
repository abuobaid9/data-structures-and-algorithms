'use strict';
const Node =require('./node');
const Queue = require('./Queue');
class BFS {
  constructor(root = null) {
    this.root = root;
  }
  traverseBFS() {
    if (!this.root) {
      return false;
    }
    const queue = new Queue();
    const treeValues = [];
    queue.enqueue(this.root);
    while (queue.size !== 0) {
      const nodeChildren = queue.first.value.children;
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach(child => queue.enqueue(child));
      }
      treeValues.push(queue.first.value);
      queue.dequeue();
    }
    return treeValues;
  }
}
module.exports = BFS;
const testTree = new BFS();

testTree.root = new Node("H");
testTree.root.children.push(new Node("e"));
testTree.root.children.push(new Node("l"));
testTree.root.children[0].children.push(new Node("l"));
testTree.root.children[0].children.push(new Node("o"));
testTree.root.children[0].children.push(new Node("W"));
testTree.root.children[1].children.push(new Node("o"));
testTree.root.children[1].children.push(new Node("r"));
testTree.root.children[1].children.push(new Node("l"));
const test=testTree.traverseBFS().values;
console.log(test);

// const testTree2 = new BFS();

// testTree2.root = new Node(10);
// testTree2.root.children.push(new Node(6));
// testTree2.root.children.push(new Node(15));
// testTree2.root.children[0].children.push(new Node(3));
// testTree2.root.children[0].children.push(new Node(8));
// testTree2.root.children[0].children.push(new Node(7));
// testTree2.root.children[1].children.push(new Node(20));

// console.log(testTree2.traverseBFS("in"));
