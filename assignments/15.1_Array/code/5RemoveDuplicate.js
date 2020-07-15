let numbers = [1,2,4,5,10,6,3,4,10,2,4];

//to check weather array include or not
let includesOrNot = (no, arr) => {
  let flag = false;
  for(let i=0; i<arr.length; i++){
    flag = (no === arr[i]) ? true : false;
    if(flag){
      break;
    }
  }

  return flag;
} 

let removeDuplicate = (arr, isInArry) => {
  let temp = [];
  arr.forEach(element => {
    if(!isInArry(element, temp)){      
      temp.push(element);
    } 
    
  })

  return temp;
}

let noDuplicate = removeDuplicate(numbers, includesOrNot);
console.log(noDuplicate); //[ 1, 2, 4, 5, 10, 6, 3 ]
