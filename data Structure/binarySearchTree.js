function BinarySearchTree(){
  this.root = null;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.push = function(value) {
  var newNode = new Node(value)

  if(!this.root) {
    this.root = newNode;
    return;
  }
}
