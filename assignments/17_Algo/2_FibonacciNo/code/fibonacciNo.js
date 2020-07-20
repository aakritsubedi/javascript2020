let fibonacciNo = (start, n) => {
  const fibSequence = [start];
  let currentValue = start;
  let previousValue = 0;

  if(n ==1) return fibSequence;

  for (let i=0; i<n; i++){
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);
  }

  return fibSequence;
}

console.log(fibonacciNo(1,10)); //[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
console.log(fibonacciNo(55,10)); //[ 55, 55, 110, 165, 275, 440, 715, 1155, 1870, 3025, 4895 ]
console.log(fibonacciNo(1,1)); //[1,1]


//nth term 
console.log(fibonacciNo(1,10)[5]); //8