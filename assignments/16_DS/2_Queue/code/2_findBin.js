"use-strict";

const Queue = require('./queue');

// findBin(n)
let findBin = n => {
  let results = [];
  let myQueue = new Queue(n);

  let v1,v2;
  myQueue.enqueue('1'); //insert the first element
  for(let i=0; i<n; i++){
    results.push(myQueue.dequeue());

    v1 = results[i] + "0";
    v2 = results[i] + "1";

    myQueue.enqueue(v1);
    myQueue.enqueue(v2);
  }

  return results;
}

//Binary Calculator
let binaryCalulator = n => {
  let results = findBin(n);

  return results.pop();
}

console.log(findBin(10)); //[ '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010' ]

console.log(`The converted value is ${binaryCalulator(25)}`); //The converted value is 11001

