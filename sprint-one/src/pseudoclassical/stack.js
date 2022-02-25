var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.position = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var position = ++this.position;
  this.storage[position] = value;
};

Stack.prototype.pop = function() {
  var position = this.position;
  if (position === 0) {
    return;
  }
  var popped = this.storage[position];
  delete popped;
  this.position--;
  return popped;
};

Stack.prototype.size = function() {
  return this.position;
};


