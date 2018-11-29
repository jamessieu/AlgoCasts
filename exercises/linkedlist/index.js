// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let pointer = this.head;
    let counter = 0;

    while(pointer) {
      counter += 1;
      pointer = pointer.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }

    let pointer = this.head;
    while(pointer) {
      if(!pointer.next) return pointer;

      pointer = pointer.next;
    }
    return pointer;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }

    if(!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;

    while(node.next) {
      previous = node;
      node = previous.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if(!this.head) {
      this.head = new Node(data);
    } else {
      this.getLast().next = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let pointer = this.head;

    while(pointer){
      if(counter === index) {
        return pointer;
      } 
      counter += 1;
      pointer = pointer.next;
    }
    return null;
  }

  removeAt(index) {
    // if list is empty 
    if(!this.head) {
      return;
    }

    // if index is 0
    if(index === 0){
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;

    // let previous = this.head;
    // let node = this.head.next;
    // let counter = 1;
    // while(node) {
    //   if(counter === index) {
    //     previous.next = node.next;
    //     return;
    //   } else {
    //     previous.next = node;
    //     node = node.next;
    //   }
    // }
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }
    
    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while(node) {
      fn(node, counter);
      node = node.next;
      counter += 1;
    }
  }
}

module.exports = { Node, LinkedList };
