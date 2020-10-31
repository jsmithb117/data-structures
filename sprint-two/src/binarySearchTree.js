var BinarySearchTree = function(input) {
  var node = {};
  node.value = input;
  node.left = null;
  node.right = null;
  _.extend(node, bstMeth);
  return node;
};

var bstMeth = {};
bstMeth.insert = function(input) {
  var newTree = BinarySearchTree(input);
  if (this.value > input) {
    if (!this.left) {
      this.left = newTree;
    } else {
      this.left.insert(input);
    }
  } else if (this.value < input) {
    if (!this.right) {
      this.right = newTree;
    } else {
      this.right.insert(input);
    }
  }
};

bstMeth.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    };
  } else if (target > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

bstMeth.depthFirstLog = function(cb) {//{5, left: {value: 2, left: null, right: null}, right: 7}
cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 //{value: 5, left: null, right: null}
 //{value: 2, left: null, right: null}
 //{value: 5, left: {value: 2, left: null, right: null}, right: null}