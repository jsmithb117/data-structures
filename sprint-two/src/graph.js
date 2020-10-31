var Graph = function() { //Constant
  this.newGraph = {};
};

Graph.prototype.addNode = function(node) { //Constant
  this.newGraph[node] = {};
};

Graph.prototype.contains = function(node) { //Constant
  return !!this.newGraph[node];
};


Graph.prototype.removeNode = function(node) { //Linear
  for (let elem in this.newGraph) {
    delete this.newGraph[elem][node];
  }
  delete this.newGraph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) { //Constant
  if (this.newGraph[fromNode] === undefined || this.newGraph[toNode] === undefined) {
    return false;
  }
  return !!this.newGraph[fromNode][toNode] && !!this.newGraph[toNode][fromNode];
};

Graph.prototype.addEdge = function(fromNode, toNode) { //Constant
  this.newGraph[fromNode][toNode] = true;
  this.newGraph[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode) { //Constant
  this.newGraph[fromNode][toNode] = false;
  this.newGraph[toNode][fromNode] = false;
};

Graph.prototype.forEachNode = function(cb) { // Linear
  for (let elem in this.newGraph) {
    cb(elem);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
*/
