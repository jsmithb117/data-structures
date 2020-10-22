var Queue = function() {
  this.storage = {
    length: 0
  };
};

Queue.prototype.enqueue = function(value) {
  //create 'currentIndex' variable, set as this.storage.length
  var currentIndex = this.storage.length;
  //while 'currentIndex' is greater than 0
  while (currentIndex > 0) {
    //set this.storage[currentIndex + 1] as this.storage[currentIndex]
    this.storage[currentIndex + 1] = this.storage[currentIndex];
    //decrement currentIndex
    currentIndex--;
  }
  //set this.storage[1] as value
  this.storage[1] = value;
  //increment this.storage.length
  this.storage.length++;
};

Queue.prototype.dequeue = function(value) {
  //if this.storage.length is greater than 0
  if (this.storage.length > 0) {
    //create output variable, set as last element of this.storage
    var output = this.storage[this.storage.length];
    //delete last element of this.storage
    delete this.storage[this.storage.length];
    //decrement this.storage.length
    this.storage.length--;
    //return output
    return output;
  }
};
Queue.prototype.size = function(value) {
  return this.storage.length;
};
