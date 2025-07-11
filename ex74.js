let matriz = [ [1,2,3],
              [4,5,6],
              [7,8,9],
              [10,11,12]];

let num = 6;
let pos_linha = 0;
let pos_coluna = 0;
let encontrado = false;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        if(matriz[i][j] === num){
            encontrado = true;
            pos_coluna= i;
            pos_linha = j;
            console.log("O número encontrado está na coluna: "+pos_coluna+ " na linha "+pos_linha);
        }
    }
}
if(!encontrado){
     console.log("O número não está na matriz");
}
