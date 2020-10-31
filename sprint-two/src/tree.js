var Tree = function(value) { //Constant
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //Constant
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) { //Linear
  return (this.value === target || this.children.some(e => e.contains(target)));
};

