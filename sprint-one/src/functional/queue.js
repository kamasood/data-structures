var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 1;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    back++;
    storage[back] = value;
  };

  someInstance.dequeue = function() {
    if (front > back) {
      return;
    }
    var dq = storage[front];
    delete storage[front];
    front++;
    return dq;
  };

  someInstance.size = function() {
    return (back - front) + 1;
  };

  return someInstance;
};
