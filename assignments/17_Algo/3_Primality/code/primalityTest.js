let isPrime = n => {
  if(n <= 3){
    return n > 1;
  }
  else if(n%2 == 0 || n%3 == 0) {
    return false;
  }

  let i=5;
  while(i*i <= n) {
    if(n%i == 0 || n%(i+2) ==0) {
      return false;
    }
    i +=6;
  }

  return true;
}

console.log(isPrime(5)); //true
console.log(isPrime(4)); //false
console.log(isPrime(12)); //false
console.log(isPrime(117)); //false
console.log(isPrime(17)); //true

