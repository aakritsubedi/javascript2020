const Stack = require('./stack');

// Creating stack of size 10
let s1 = new Stack(10);

console.log(s1.isEmpty()); //true
console.log(s1.getSize()); //0

//Insert elements
for(let i=0; i<10; i++){
  s1.push(i+1);
}

console.log(s1.getSize()); //10

// Pop the element 
s1.pop(); //10
s1.pop(); //9

console.log(s1.getSize()); //8

