//Array of age 
let ages = [1,25,60,17,10,12,46,19,38,19,15];

// Function to check Adult
let checkAdult = value => {
  return value >=18 ?  true : false;
}

let filterMethod = (arr, validate) => {
  let isValid = [];
  arr.forEach(item => {
    if(validate(item)){
      isValid.push(item);
    }
  });

  return isValid;
}

let adults = filterMethod(ages, checkAdult);
console.log(adults);
