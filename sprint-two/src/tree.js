var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  return (this.value === target || this.children.some(e => e.contains(target)));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


//{value: 6, children: [{value: 5, children: [{value: 4, children: []}, {value: 3, children: []}]}, {value: 10, children: [{value: 9, children: []}, {value: 8, children: []}]}]}

//        6
//      /   \
//    [5       10]
//   / \      / \
//  4   3    [9    8]