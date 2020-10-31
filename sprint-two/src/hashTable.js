

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //[ [['Bob', 'Barker']], , , , , , ]
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var tuple = [k, v];
  // this._storage.set(index, tuple);
  // var lookup = this._storage.get(index);
  //lookup at index, if undefined
  // var bucket = [];
  // if (this._storage[index] === undefined) {
  //   bucket.push([k, v]);
  //   this._storage.push(bucket);

  // } else {
  //   this._storage[index].push([k, v]);
  // }

  if (this._storage.get(index) === undefined) {
    //create a bucket
    var bucket = [];
  } else { //bucket is already defined
    var bucket = this._storage.get(index);
  }
  //iterate bucket
  for (let i = 0; i < bucket.length; i++) {
    //if element[0] === key
    if (bucket[i][0] === k) {
      //overwrite element[1] with new v
      bucket[i][1] = v;
    }
  }
  var tuple = [k, v];
  bucket.push(tuple);
  this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get bucket from storage
  // iterate bucket
  // within iteration: if the elem === k
  // return value
  // else throw 'key doesn't exist'
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }

  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //[[1, 2], [3, 4], [5, 6]]
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  //.set new bucket at index
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


