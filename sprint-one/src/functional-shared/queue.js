var Queue = function() {
  var someInstance = {
    storage: {
      length: 0
    }
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    //create currentIndex, set as storage.length
    var currentIndex = this.storage.length;
    ////move all elements up one to make room for the new value
    //while currentIndex is greater than 0
    while (currentIndex > 0) {
      //set storage[currentIndex + 1] as storage[currentIndex]
      this.storage[currentIndex + 1] = this.storage[currentIndex];
      //decrement currentIndex
      currentIndex--;
    }
    //set value as first element in storage
    this.storage[1] = value;
    //increment this.storage.length
    this.storage.length++;
  },
  dequeue: function() {
    //if storage.length is greater than zero
    if (this.storage.length > 0) {
      // console.log ('storage: ', this.storage)
      //create output variable, set as last element
      var output = this.storage[this.storage.length];
      // console.log ('output1: ', output)
      //delete last element
      delete this.storage[this.storage.length];
      //decrement storage.length
      this.storage.length--;
      //return output
      // console.log ('output2: ', output)
      return output;
    }
  },
  size: function() {
    return this.storage.length;
  }
};


