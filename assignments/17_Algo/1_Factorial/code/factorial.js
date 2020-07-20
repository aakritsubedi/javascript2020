let factorial = n => {
  let fact = 1;
  for(let i=n; i>1; i--){
    fact *= i;
  }

  return fact;
}

console.log(factorial(0)); //1
console.log(factorial(5)); //120
console.log(factorial(7)); //5040