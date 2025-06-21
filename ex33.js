
let mat1 = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];
let mat2 = [[9, 8, 7],[6, 5, 4],[3, 2, 1]];
let mat3 = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      mat3[i][j] += mat1[i][k] * mat2[k][j];
    }
  }
}

for (let  i=0; i <3 ; i++){
   console.log(mat3[i]);
}

