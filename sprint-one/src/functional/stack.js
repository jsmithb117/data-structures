var Stack = function() {
  var someInstance = {};
  var storage = {};
  //create 'length' property of storage, set to 0
  storage.length = 0;

  someInstance.push = function(value) {
    //increment storage.length
    storage.length++;
    //add 'value' at storage.length
    storage[storage.length] = value;
  };

  someInstance.pop = function() {
    //if storage.length is greater than 0
    if (storage.length > 0) {
      //create 'output', set to most recently added element
      var output = storage[storage.length];
      //remove most recently added element
      delete storage[storage.length];
      //decrement storage.length
      storage.length--;
      //return output
      return output;
    }
  };

  someInstance.size = function() {
    //return storage.length
    return storage.length;
  };

  return someInstance;
};
