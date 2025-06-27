const vet = [1,5,12,19,90,17,1,28,56,18,0,15,5,6,2,22,13,14,16,7];
let menor = vet[0];
let pos = 0;

for (let i = 0; i < vet.length; i++){
    if (vet[i] < menor){
        menor = vet[i];
        pos = i;
    }
}

console.log("O menor valor é "+ menor + " e está na posição "+ pos);