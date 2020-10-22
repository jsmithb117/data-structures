class Queue {
  constructor() {
    this.storage = {
      length: 0
    };
  }

  enqueue(value) {
    //create 'currentIndex' variable, instantiate to this.storage.length
    var currentIndex = this.storage.length;
    //while 'currentIndex' is greater than zero
    while (currentIndex > 0) {
      //set this.storage[currentIndx + 1] as this.storage[currentIndex]
      this.storage[currentIndex + 1] = this.storage[currentIndex];
      //decrement currentIndex
      currentIndex--;
    }
    //set value as this.storage[1]
    this.storage[1] = value;
    //increment this.storage.length
    this.storage.length++;
  }

  dequeue() {
    //if this.storage.length is greater than zero
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
  }

  size() {
    return this.storage.length;
  }
}
