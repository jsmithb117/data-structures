var Set = function() { //Constant
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // Constant
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // Linear
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) { // Linear
  for (var key in this._storage) {
    if (key === item) {
      delete this._storage[item];
    }
  }
};
