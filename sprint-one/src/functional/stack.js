var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    position++;
    storage[position] = value;
  };

  someInstance.pop = function() {
    if (position === 0) {
      return;
    }
    var popped = storage[position];
    delete storage[position];
    position--;
    return popped;
  };

  someInstance.size = function() {
    return position;
  };

  return someInstance;
};
