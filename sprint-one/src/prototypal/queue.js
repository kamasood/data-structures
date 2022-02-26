var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.front = 1;
  instance.back = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var back = ++this.back;
  this.storage[back] = value;
};

queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  return this.back - this.front + 1;
};