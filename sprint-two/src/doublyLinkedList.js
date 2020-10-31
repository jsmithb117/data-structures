var DoublyLinkedList = function() { //Constant
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //Constant
    var newNode = Node(value);
    if (!!list.tail) {
      var currentTail = list.tail;
    } else {
      var currentTail = newNode;
    }
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
    newNode.previous = currentTail;
    newNode.previous.next = newNode;
  };

  list.removeHead = function() { //Constant
    var currentHeadValue = list.head.value;
    var currentNextValue = list.head.next;
    list.head = currentNextValue;
    return currentHeadValue;
  };

  list.contains = function(target) { //Linear
    var element = list.head;
    while (element) {
      if (element.value === target) {
        return true;
      }
      element = element.next;
    }
    return false;
  };

  list.addToHead = function(value) { //Constant
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var oldHead = list.head;
      newNode.next = oldHead;
      newNode.next.previous = newNode;
      list.head = newNode;
    }
  };

  list.removeTail = function() { //Constant
    var newTail = list.tail.previous;
    list.tail = newTail;
  };
  return list;
};

var Node = function(value) { //Constant
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
