let factorial = n => {
  if(n==0){

    return 1;
  }
  fact = n* factorial(n-1);

  return fact;
}

console.log(factorial(0)); //1
console.log(factorial(5)); //120
console.log(factorial(7)); //5040