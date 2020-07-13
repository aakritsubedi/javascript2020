//Conditional Statement

//If ..else if .. else Statement
let no = 0;
if(no > 0) {
  console.log(`The no. ${no} is positive no.`);
}
else if(no < 0){
  console.log(`The no. ${no} is positive no.`);
}
else {
  console.log(`The no. is zero.`);
}

//Task 1: Simple User Login
let username = 'admin';
let password = 'guest123@';

if(username === 'admin' & password === 'guest123@') {
  console.log('Welcome Admin');
}
else {
 console.log('Invalid username or password');
}

//Task 2: Fruits or Vegetables
let fruits = ['banana','apple','orange','pineapple','berry'];
let vegetables = ['cauliflower','broccoli','cabbage','peas', 'Lavender'];
let myFav = 'banana';

if(fruits.includes(myFav)){
  console.log('You love fruits');
}
else if(vegetables.includes(myFav)) {
  console.log('You love vegetables');
}
else {
  console.log('Our list has insufficent data to predict your choice...');
}