let matriz = [[1,2,3], [4,5,6], [7,8,9]];
let soma = 0;
let cont1=0;
let media = 0;

for (i = 0; i < matriz.length; i++){
    for (let j=1; j < matriz[i].length; j++){
        soma += matriz[i][j];
        cont1++;
    }

}

media = soma/cont1;
console.log("A média é "+media);