var LinkedList = function() { //Constant
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //Constant
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() { //Constant
    var currentHeadValue = list.head.value;
    var currentNextValue = list.head.next;
    list.head = currentNextValue;
    return currentHeadValue;
  };

  list.contains = function(target) { //Linear
    var stringyObj = JSON.stringify(list);
    if (stringyObj.includes(target)) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) { //Constant
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};
