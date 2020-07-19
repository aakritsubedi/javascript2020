const Queue = require('./queue');

let q1 = new Queue(10); //initilize the queue of size 10

console.log(q1.isEmpty()); //true
console.log(q1.getCapacity()); //10

q1.enqueue(5);
q1.enqueue(10);
q1.enqueue(15);

q1.displayAll(); //5,10,15
console.log('');

q1.dequeue();
q1.displayAll(); //10,15