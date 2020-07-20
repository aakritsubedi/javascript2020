"use strict";
module.exports = class Stack {
  constructor(size) {
    this.size = size;
    this.items = new Array(0);
    this.top = null;
  }

  //isEmpty: return true if stack is empty 
  isEmpty() {
    return (this.items.length == 0) ? true : false;
  }

  //getSize: returns the size of stack
  getSize() {
    return this.items.length;
  }

  //getTop: return the top of stack if not empty
  getTop() {
    if(!this.isEmpty()) {
      return this.top;
    }
    else {
      console.log('The stack is empty.');
    }
  }

  //push: insert element top of stack
  push(element) {
    this.items.push(element);
    this.top = element;
  }

  //pop: remove the element from the top of stack
  pop() {
    if(!this.isEmpty()) {
      if(this.getSize() == 1){
        this.top = null;
        return this.items.pop();
      }
      else {
        this.top = this.items[this.getSize() - 2];
        return this.items.pop();
      }
    }
    else {
      return null;
    }
  }
};
