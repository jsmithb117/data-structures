var Queue = function() {
  var someInstance = {};
  var storage = {};
  //create storage.length, set to 0;
  storage.length = 0;
  someInstance.enqueue = function(value) {
    //create 'currentIndex' variable, instantiate to storage.length
    var currentIndex = storage.length;
    //while 'currentIndex' is greater than zero
    while (currentIndex > 0) {
      //set storage[currentIndx + 1] as storage[currentIndex]
      storage[currentIndex + 1] = storage[currentIndex];
      //decrement currentIndex
      currentIndex--;
    }
    //set value as storage[1]
    storage[1] = value;
    //increment storage.length
    storage.length++;
  };

  someInstance.dequeue = function() {
    //if storage.length is greater than zero
    if (storage.length > 0) {
      //create output variable, set as last element of storage
      var output = storage[storage.length];
      //delete last element of storage
      delete storage[storage.length];
      //decrement storage.length
      storage.length--;
      //return output
      return output;
    }
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
