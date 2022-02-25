var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.front = 1;
  instance.back = 0;

  var storage = {};

  $.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    var back = ++this.back;
    this[back] = value;
  },
  dequeue: function() {
    var front = this.front;
    var back = this.back;
    if (front > back) {
      return;
    }
    var dq = this[front];
    delete dq;
    this.front++;
    return dq;
  },
  size: function() {
    return this.back - this.front + 1;
  }
};


