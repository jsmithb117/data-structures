var HashTable = function() { //Constant
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) { //Constant
  var index = getIndexBelowMaxForKey(k, this._limit);
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
  this._count++;
  if (this._count >= (this._limit * .75)) {
    this.resize(this._limit * 2)
  }
};

HashTable.prototype.retrieve = function(k) { //Constant
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  console.log (this._storage);
  console.log (bucket);
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
  this._count--;
  if (this._count < (this._limit * .25)) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit) {
  var insertThings = function (element, i, storage) {
    //get each bucket
    var bucket = element;
    if (bucket) {
      //iterate bucket
      for (let j = 0; j < element.length; j++) {
        //create index
        var index = getIndexBelowMaxForKey(bucket[0], newLimit);
        //create tuple
        var tuple = [bucket[i][0], bucket[i][1]];
        //insert each element of the bucket into the NEW hashtable
        n._storage.set(index, tuple);
      }
    }
  };
  var n = new HashTable();
  n._limit = newLimit;
  //create a new hashTable with the new limit
  //iterate old hashTable using .each(insertThings)
  this._storage.each(insertThings);
    //insert each element into new hashTable
  //change this._limit to be newLimit
  this._limit = newLimit;
  //reassign this._storage as newHashtable
  this._storage = n._storage;
};

