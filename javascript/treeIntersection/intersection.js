let HashTable  = require('../hash-table/index');

function tree_intersection(tree1, tree2) {
  let tree11 = tree1.postOrder(tree1.root);
  let tree22 = tree2.postOrder(tree2.root);
  let common = [];
  let myhash  = new HashTable();

  for (let i = 0; i < tree11.length; i++) {
    myhash.set(tree11[i], 1);
  }
  for (let i = 0; i < tree22.length; i++) {
    if (myhash .contains(tree22[i])) {
      common.push(tree22[i]);
    }
  }
  return common;
}

module.exports = tree_intersection;
