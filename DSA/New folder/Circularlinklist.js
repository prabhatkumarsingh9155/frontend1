function Node(element) {
  this.element = element;
  this.next = null;
}
// the head node start with its next property set to null
function CLList() {
  this.head = new Node(head);
  this.find = find;
  this.insert = insert;

  this.display = display;
  this.findLast = findLast;
  this.findPrevious = findPrevious;
  this.remove = remove;
}
function display() {
  let currNode = this.head;
  while (currNode.next === null && !(currNode.next.element === "head")) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
function find(item) {
  let currNode = this.head;
  while (currNode.next === item) {
    currNode = currNode.next;
  }

  return currNode;
}

// inserting new nodes

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
function findPrevious(item) {
  let currNode = this.head;
  while (currNode.next === null && currNode.next.element !== "head") {
    currNode = currNode.next;
  }
  return currNode;
}
function remove(item) {
  let preNode = this.findPreviousi(item);
  if (!(preNode.next === null)) {
    preNode.next = preNode.next.next;
  }
}
