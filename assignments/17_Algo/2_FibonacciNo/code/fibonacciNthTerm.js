// Calculate fibonacci number at specific position using closed form function (Binet's formula).
let fibnacciNthTerm = position => {
  let maxValidPosition = 70;

  if(position<1 || position > maxValidPosition) {
    console.log(`Can't handle position smaller than 1 or greater than ${maxValidPosition}`);
  }

  const SQRT5 = Math.sqrt(5); //Calculate √5 to re-use it in further formulas
  const PHI = (1 + SQRT5) / 2; //Calculate φ constant (≈ 1.61803)

  return Math.floor((PHI ** position) / SQRT5 + 0.5);
}

console.log(fibnacciNthTerm(8)); //21