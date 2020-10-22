var Stack = function() {
  this.storage = {
    length: 0
  };
};

Stack.prototype.push = function(value) {
  //increment this.storage.length
  this.storage.length++;
  //add 'value' at this.storage.length
  this.storage[this.storage.length] = value;
};

Stack.prototype.pop = function() {
  //if this.storage.length is greater than 0
  if (this.storage.length > 0) {
    //create 'output', set to most recently added element
    var output = this.storage[this.storage.length];
    //remove most recently added element
    delete this.storage[this.storage.length];
    //decrement this.storage.length
    this.storage.length--;
    //return output
    return output;
  }
};

Stack.prototype.size = function() {
  return this.storage.length;
};
