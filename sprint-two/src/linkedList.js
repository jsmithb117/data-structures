var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node
    var newNode = Node(value);
    //if list head is empty
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      // console.log(list);
    }
    list.tail = newNode;
  }; //{head:{value: 4, next: {null}}, tail: {value: 4, next: {null}}}
  // {value: 4, next: {value: 5, next: null}}
  list.removeHead = function() {
    // debugger;
    var currentHeadValue = list.head.value;
    var currentNextValue = list.head.next;
    // if (list.head.next) {
    list.head = currentNextValue;
    // }
    return currentHeadValue;
  }; //{value: 5, next: null}

  list.contains = function(target) {
    var stringyObj = JSON.stringify(list);
    if (stringyObj.includes(target)) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */