

var HashTable = function() { //Constant
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //Constant
  if (this._storage.get(index) === undefined) {
    var bucket = [];
  } else {
    var bucket = this._storage.get(index);
  }
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
  }
  var tuple = [k, v];
  bucket.push(tuple);
  this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k) { //Constant
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }

  }
};

HashTable.prototype.remove = function(k) { //Constant
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


