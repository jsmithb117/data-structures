

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.newGraph[node] = {};
  // var newNode = Graph();//{node: {}}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.newGraph[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let elem in this.newGraph) {
    delete this.newGraph[elem][node];
  }
  delete this.newGraph[node];
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.newGraph[fromNode] === undefined || this.newGraph[toNode] === undefined) {
    return false;
  }
  return !!this.newGraph[fromNode][toNode] && !!this.newGraph[toNode][fromNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode][toNode] = true;
  this.newGraph[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if (this.contains(fromNode) && this.contains(toNode)) {
  this.newGraph[fromNode][toNode] = false;
  this.newGraph[toNode][fromNode] = false;
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate graph
  for (let elem in this.newGraph) {
    //execute cb
    cb(elem);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


