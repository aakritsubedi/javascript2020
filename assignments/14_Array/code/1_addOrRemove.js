let array1 = [1,2,3];
let array2 = [4,5,6];

//arr.push(...items)
array1.push(...array2);
console.log(array1); //[1,2,3,4,5,6];

array1.push(7);
console.log(array1); //[1,2,3,4,5,6,7];

//arr.pop()
array1.pop(); //[1,2,3,4,5,6];
array1.pop(); //[1,2,3,4,5];
for(let i=0;i<2; i++){
  array1.pop();
} 
console.log(array1); //[1,2,3]

//arr.shift()
array1.shift(); 
console.log(array1); //[2,3]

//arr.unshift(...item)
array1.unshift(1); //[1,2,3]
array1.unshift(...array2); 
console.log(array1); //[4,5,6,1,2,3]

//arr.splice(index, howMany, item1, ... itemN)
array1.splice(1,3); // starts from index 1 and remove successive 3 items
console.log(array1); //[ 4, 2, 3 ]

array1.splice(1,0,5,6,1); //from index 1 remove 0element and add 5,6,1
console.log(array1); //[4,5,6,1,2,3]

//arr.slice(start,end)
array1.splice(0,3);
console.log(array1); //[1,2,3]

//arr.concat(arr1, arr2...)
let array3 = array1.concat(array2);
console.log(array3);//[1,2,3,4,5,6]
