//Definition of a function add
function add() {
  let a = 5;
  let b = 6;
  let result = a + b;
  console.log('The required result is '+ result);
}

//calling a function add
add(); //The required result is 11
add(); //The required result is 11
//The result is always 11

//Definition of a function addition 
function addition(a,b) {
  let result = a + b;
  console.log('The required result is '+ result);
}

//calling a function addtion(5,6)
addition(5,6); //The required result is 11
addition(8,12); //The required result is 20
//The result depends on the parameter passed

addition(); //The required result is NaN

//defining the default parameter function
function sum(a=6,b=5) {
  let result = a + b;
  console.log('The required result is '+ result);
}

sum(); //The required result is 11
sum(8,16); //The required result is 24
sum(8); //The required result is 13, here a=8
sum(b=8); //The required result is 13
sum(a=9); //The required result is 14

//defining the function that returns the result
function summation(a,b=8) {
  let result = a + b;
  
  return result;
}

console.log('The required result is ', summation(8)); //The required result is 16
//Also can be assigned in the variable
let result1 = summation(5,15);
console.log('The required result is ', result1); //The required result is 20

//Use result directly in conditional or other statements
if(summation(5,5) >= 10) {
  console.log('The result is greater than 10.');
  //also use the result1 assigned in above step anywhere in the main program
  if(result1 > 25){
    console.log('The previous result is greater than 25');
  }
  else{
    console.log('The previous result is less than 25');
  }
}
