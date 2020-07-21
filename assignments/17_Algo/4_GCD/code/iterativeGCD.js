let gcd = (no1, no2) => {
  let num1 = Math.abs(no1);
  let num2 = Math.abs(no2);

  // Subtract one number from another until both numbers would become the same. 
  // This will be out GCD. Also quit the loop if one of the numbers is zero.
  while(num1 && num2 && num1 !== num2) {
    [num1, num2] = num1 > num2 ? [num1-num2, num2] : [num1, num2-num1];
  }

  return num1 || num2;
}

console.log(gcd(252, 105)); //21
console.log(gcd(8, 12)); //4