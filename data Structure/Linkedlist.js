function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

var LL = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();

var node1 = new Node(5, node2, null)
