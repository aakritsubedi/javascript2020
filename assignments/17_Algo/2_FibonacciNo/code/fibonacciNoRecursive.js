let fibonacciNo = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fibonacciNo(n - 1) + fibonacciNo(n - 2);
};

let n=10;
i=1;
for (c = 1; c <= n; c++) {
  console .log(fibonacciNo(i));//[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
  i++;
}
