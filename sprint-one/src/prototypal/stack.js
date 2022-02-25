var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.position = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var position = ++this.position;
  this.storage[position] = value;
};

stackMethods.pop = function() {
  var position = this.position;
  if (position === 0) {
    return;
  }
  var popped = this.storage[position];
  delete popped;
  this.position--;
  return popped;
};

stackMethods.size = function() {
  return this.position;
};