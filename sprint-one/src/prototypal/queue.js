var Queue = function() {
  var someInstance = Object.create(queueMethods);
  //create new instance with length property set initially to 0
  someInstance.storage = {
    length: 0
  };
  //return new instance
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    //create index variable, set as current length
    var currentIndex = this.storage.length;
    //iterate queue
    while (currentIndex > 0) {
      //set current element as next higher indexed element
      this.storage[currentIndex + 1] = this.storage[currentIndex];
      //decrement current index
      currentIndex--;
    }
    //set value as first element of storage
    this.storage[1] = value;
    //increment length property
    this.storage.length++;
  },
  dequeue: function() {
    //check if queue is empty
    if (this.storage.length > 0) {
      //create output, set as last element in storage
      var output = this.storage[this.storage.length];
      //decrement length property
      this.storage.length--;
      //return output
      return output;
    }
  },
  size: function() {
    return this.storage.length;
  }
};


