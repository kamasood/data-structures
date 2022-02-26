// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var addedNode = {};
  addedNode.value = node;
  addedNode.edges = [];
  this.nodes.push(addedNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    for (var j = 0; j < this.nodes[i].edges.length; j++) {
      if (this.nodes[i].edges[j] === node) {
        this.nodes[i].edges.splice(j, 1);
      }
    }
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    var currentValue = this.nodes[i].value;
    var currentEdges = this.nodes[i].edges;
    if (currentValue === fromNode) {
      for (var j = 0; j < currentEdges.length; j++) {
        if (currentEdges[j] === toNode) {
          return true;
        }
      }
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
      // return true;
    }
  }
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
      // return true;
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.splice(i, 1);
    }
  }
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */