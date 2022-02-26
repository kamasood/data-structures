

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var thisTuple = [k, v];
  var arrayOfTuples = this._storage.get(index);

  if (arrayOfTuples === undefined) {
    this._storage.set(index, []);
  }

  arrayOfTuples = this._storage.get(index);

  var exists = false;

  arrayOfTuples.forEach(function(tuple) {
    if (tuple[0] === k) {
      tuple[1] = v;
      exists = true;
      return;
    }
  });

  if (!exists) {
    arrayOfTuples.push(thisTuple);
  }

  console.log(arrayOfTuples);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  var result;

  arrayOfTuples.forEach(function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
      return;
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  var result;

  arrayOfTuples.forEach(function(tuple) {
    if (tuple[0] === k) {
      arrayOfTuples.splice(arrayOfTuples.indexOf(tuple), 1);
      return;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


