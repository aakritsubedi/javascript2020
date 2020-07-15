let mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] //first matrix of size 3*3

let mat2 = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3]
]//second matrix of size 3*3

let multiplyMatrix = (matA, matB) => {
  //for square matrix, multiplication is only possible if length of both array is same 
  if(matA.length !== matB.length) {
    return 'Multiplication is not possible';
  } 
  let result = []; //array to hold result
  for(let x=0; x<matA.length; x++){
    let newRow = []; //to add result
    for(let y=0; y<matB.length; y++){
      let dotProduct = 0;
      for(let i=0; i<matA[x].length; i++){
        dotProduct += matA[x][i] *  matB[i][y];
      }
      newRow.push(dotProduct);
    }
    result.push(newRow);
  }

  return result;
}

const prodAB = multiplyMatrix(mat1, mat2);
console.log(prodAB); //[ [ 18, 24, 30 ], [ 54, 69, 84 ], [ 90, 114, 138 ] ]
 
const prodAB1 = multiplyMatrix(mat1, [[1,2,3]]);
console.log(prodAB1); //Multiplication is not possible

