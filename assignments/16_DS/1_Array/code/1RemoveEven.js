let numbers = [1,2,4,5,10,6,3];

//1. First Method
let removeEven = arrOfNo => {
  let oddNoArray = [];
  arrOfNo.forEach(no => {
    if(no%2 !== 0){
      oddNoArray.push(no);
    }
  })

  return oddNoArray;
}

let oddNo = removeEven(numbers);
console.log(oddNo); //[1, 5, 3]

//2. Using Filter Method
let oddNos = numbers.filter(no => (no%2 !== 0));
console.log(oddNos); //[1, 5, 3]

