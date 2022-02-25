var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var isContained = false;

  if (this.value === target) {
    return isContained = true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      isContained = this.children[i].contains(target);
      if (isContained) {
        return true;
      }
    }
  }

  return isContained;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
