//required output pattern

//     *  
//    * * 
//   * * * 
// * * * * *

//printing the pattern shown above
let n=5; let t =0;
 for(let i=1; i<n; i++){
   for(let k=t; k<n; k++){
    process.stdout.write(" ");
   }
   for(let j=0; j<i; j++){
    process.stdout.write(" * ");
    t++;
   }
   process.stdout.write("\n");
 }





// Note: We are using node runtime to see the output.