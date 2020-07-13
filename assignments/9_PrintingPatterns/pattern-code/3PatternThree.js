//required output pattern

//           * 
//         * *
//       * * *
//     * * * * 
//   * * * * *
// * * * * * *


//printing the pattern shown above
let n = 8;
for(let i=0; i<=n; i++){
  for(let j=n; j>=i; j--){
    process.stdout.write(" ");
  }
  for(let k=1; k<=i; k++){
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}



// Note: We are using node runtime to see the output.