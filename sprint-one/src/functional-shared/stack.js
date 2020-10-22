var Stack = function() {
  var someInstance = {
    storage : {
      length: 0
    }
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    //increment storage.length;
    this.storage.length++;
    //set value to storage at storage.length
    this.storage[this.storage.length] = value;
  },
  pop: function() {
    //if storage.length is greater than zero
    if (this.storage.length > 0) {
      //create 'output', set as most recent element(first)
      var output = this.storage[this.storage.length];
      //delete most recent element
      delete this.storage[this.storage.length];
      //decrement this.storage.length
      this.storage.length--;
      //return output
      return output;
    }
  },
  size: function() {
    return this.storage.length;
  }
};


