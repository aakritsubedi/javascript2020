"use strict";
//Queue Implementation using array

module.exports = class Queue {
  constructor(size) {
    this.size = size; //the size of queue
    this.items = new Array(0); //declare the array
    this.front = 0; //top
    this.rear = 0; //back
  }

  //getSize: return the size of a queue
  getSize() {
    return this.items.length;
  }

  //getCapacity: return the full size of queue
  getCapacity() {
    return this.size;
  }

  //isFull: returns true if queue is full
  isFull(){
    return this.size < (this.getCapacity() - 1) ? true : false; 
  }

  // Enqueue: Addition of element at rear
  enqueue(element) {
    if(!this.isFull()) {
      this.items.push(element); //insert at the rear of the element
      this.rear++;
    }
    else {
      console.log('Queue is full.');
    }
    
    return; 
  }

  //isEmpty: return true if queue is empty
  isEmpty() {
    return (this.front == this.rear) ? true : false
  }

  // Dequeue: Deletion of element at front
  dequeue() {
    if(!this.isEmpty()) {
      this.rear--;
      return this.items.shift(); //reduce the size of an array by one and return the removed first element
    }
    else {
      console.log('The queue is empty.');
    }

    return;
  }

  //front: display the first element of queue
  getFirst() {
    if(!this.isEmpty) {
      return this.items[0];
    }
    else {
      return null;
    }
  }

  //display All element
  displayAll() {
    if(this.isEmpty()) {
      console.log('The queue is empty');
    }

    //traverse front to rear
    for(let i=this.front; i<this.rear; i++){
      console.log(`The element at position: ${i+1}: is ${this.items[i]}`);
    }

    return;
  }
};

