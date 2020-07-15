//Declare the array
let fruits =  ["apples", "oranges", "mango", 'banana', 'watermelon', 'gauva'];

//arr.foreach(item => {})

fruits.forEach((item, index, array) => {
  console.log(`S.N.: ${index+1} Item: ${item.toUpperCase()} is in array of fruits ${array}`);
})
//Output 
// S.N.: 1 Item: APPLES is in array of fruits apples,oranges,mango,banana,watermelon,gauva
// S.N.: 2 Item: ORANGES is in array of fruits apples,oranges,mango,banana,watermelon,gauva
// S.N.: 3 Item: MANGO is in array of fruits apples,oranges,mango,banana,watermelon,gauva
// S.N.: 4 Item: BANANA is in array of fruits apples,oranges,mango,banana,watermelon,gauva
// S.N.: 5 Item: WATERMELON is in array of fruits apples,oranges,mango,banana,watermelon,gauva
// S.N.: 6 Item: GAUVA is in array of fruits apples,oranges,mango,banana,watermelon,gauva

//function to capitalize the fruits name
let capitalizeFruitsName = fruit => {
  return fruit.toUpperCase();
}

fruits.forEach(item => {
  console.log(capitalizeFruitsName(item));
})
// Output 
// APPLES
// ORANGES
// MANGO
// BANANA
// WATERMELON
// GAUVA