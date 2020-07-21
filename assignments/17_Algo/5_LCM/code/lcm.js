//Compute GCD
let gcd = (num1, num2) => {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  return (num2===0) ? num1 : gcd(num2, num1 % num2);
}

let lcm = (num1, num2) => {
  return ((num1 === 0) || (num2 === 0)) ? 0 : Math.abs(num1 * num2) / gcd(num1, num2);
}

console.log(lcm(4,6)); //12