let vet1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let vet2 = [1,3,2,4,6,5,7,10,9,8,11,13,12,14,15];
let cont = 0;

for(let i = 0; i < vet1.length; i++){
    if((vet1[i] === vet2[i])){
       cont++;
    }
}

console.log("Os vetores 1 e 2 são iguais "+ cont+ " vezes");