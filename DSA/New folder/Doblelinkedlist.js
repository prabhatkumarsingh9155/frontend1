function Node(element) {
  this.element = element;
  this.next = null;
}
// the head node start with its next property set to null
function Doublelinkedlist() {
  this.head = new Node(head);
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findLast = findLast;
  this.displayRevers = this.displayRevers;
}

function find(item) {
  let currNode = this.head;
  while (currNode.next === item) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function display() {
  let currNode = this.head;
  while (currNode.next === null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function remove(item) {
  let currNode = this.find(item); // current node position
  if (!(currNode.next === null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}
function findLast() {
  let currNode = this.head;
  while (!currNode.next === null) {
    currNode = currNode.next;
  }
  return currNode;
}
