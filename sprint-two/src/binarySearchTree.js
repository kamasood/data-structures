var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value >= this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      return;
    } else {
      this.right.insert(value);
    }
  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      return;
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {

  func(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }

  return;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//