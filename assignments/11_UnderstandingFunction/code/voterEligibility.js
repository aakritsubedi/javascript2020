// //Set of an eligible citizenship number
const validCitizenshipNo = ['123795','125963','199533','156996','125639'];

//defining the function to check voters eligibility
function checkVoterEligibility() {
  let myCitizenshipNo = '125963';
  let myAge = 23;
  if(validCitizenshipNo.includes(myCitizenshipNo) && myAge >= 18){
    console.log('Hey!! You are eligible to cast vote.');
  }
  else {
    console.log('Hey!! You are not eligible to cast vote.');
  }
}

//calling the function
checkVoterEligibility(); //Hey!! You are eligible to cast vote.

//defining the function to which receives the parameters
function checkVoterEligibility(myCitizenshipNo, myAge) {
  if(validCitizenshipNo.includes(myCitizenshipNo) && myAge >= 18){
    console.log('Hey!! You are eligible to cast vote.');
  }
  else {
    console.log('Hey!! You are not eligible to cast vote.');
  }
}

//calling the function
checkVoterEligibility('125963',23); //Hey!! You are eligible to cast vote.
checkVoterEligibility('125963',13); //Hey!! You are not eligible to cast vote.

//setting age to the default value
function checkVoterEligibility(myCitizenshipNo, myAge=18) {
  if(validCitizenshipNo.includes(myCitizenshipNo) && myAge >= 18){
    console.log('Hey!! You are eligible to cast vote.');
  }
  else {
    console.log('Hey!! You are not eligible to cast vote.');
  }
}

//calling the function
checkVoterEligibility('125963'); //Hey!! You are eligible to cast vote.
checkVoterEligibility('125963',12); //Hey!! You are not eligible to cast vote.

function that return the weather user is eligible to cast vote or not
function checkVoterEligibility(myCitizenshipNo, myAge=18) {
  if(validCitizenshipNo.includes(myCitizenshipNo) && myAge >= 18){
    return true;
  }
  else {
    return false;
  }
}

let isEligible = checkVoterEligibility('125963',23);
if(isEligible){
  console.log('Hey!! You are eligible to cast vote.'); 
}
else {
  console.log('Hey!! You are not eligible to cast vote.');
}//Hey!! You are eligible to cast vote.

// Best Practice
function checkVoterEligibility(myCitizenshipNo, myAge=18) {
  return (validCitizenshipNo.includes(myCitizenshipNo) && myAge >= 18) ? true : false;
}

console.log('Your voting status: ', checkVoterEligibility('125963',23) ? 'valid' : 'invalid');