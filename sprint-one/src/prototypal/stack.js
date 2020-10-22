var Stack = function() {
  var someInstance = Object.create(stackMethods);
  //create new instance with length property set initially to 0
  someInstance.storage = {
    length: 0
  };
  //return new instance
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    //increment length
    this.storage.length++;
    //set value at new length index
    this.storage[this.storage.length] = value;
  },
  pop: function() {
    //check for length > 0 so you can't pop the zeroth element
    if(this.storage.length > 0) {
      //set output as the last element that was pushed to the stack
      var output = this.storage[this.storage.length];
      //delete the last element that was pushed to the stack
      delete this.storage[this.storage.length];
      //decrement length
      this.storage.length--;
      //return output
      return output;
    }
  },
  size: function() {
    return this.storage.length;
  }
};


