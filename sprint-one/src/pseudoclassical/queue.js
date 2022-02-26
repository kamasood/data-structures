var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 1;
  this.back = 0;
};

Queue.prototype.enqueue = function(value) {
  var back = ++this.back;
  this.storage[back] = value;
};

Queue.prototype.dequeue = function() {
  var front = this.front;
  var back = this.back;
  if (front > back) {
    return;
  }
  var dq = this.storage[front];
  delete dq;
  this.front++;
  return dq;
};

Queue.prototype.size = function() {
  return this.back - this.front + 1;
};


