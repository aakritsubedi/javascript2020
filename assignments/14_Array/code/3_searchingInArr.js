//1. indexOf/lastIndexOf and includes
let arr = [1, 0, false, 1, 2, 1, 3, NaN];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1
console.log( arr.lastIndexOf(1)); //5
console.log( arr.indexOf(NaN) ); // -1 (should be 7, but === equality doesn't work for NaN)

console.log( arr.includes(1) ); // true
console.log( arr.includes(NaN) );// true (correct)

let age = [10, 12, 15, 18, 20, 22, 16, 5];
let checkAdult = value => {
  return value >= 18 ? true: false; 
}
let adult = age.findIndex(checkAdult);
console.log(adult);//3, indexOf first one to return true i.e 18

// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
let result = age.find(checkAdult);
console.log(result); //18, value of first one to return true

let results = age.filter(checkAdult);
console.log(results);//[ 18, 20, 22 ]

