let gcd = (no1, no2) => {
  let num1 = Math.abs(no1);
  let num2 = Math.abs(no2);

  // To make algorithm work faster instead of subtracting one number from the other we use mod op.
  let result = (num2===0) ? num1 : gcd(num2, num1 % num2);

  return result;
}

console.log(gcd(252, 105)); //21
console.log(gcd(8, 12)); //4