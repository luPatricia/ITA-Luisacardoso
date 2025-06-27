const vet = [1,5,12,19,90,17,1,28,56,18,0,15,5,6,2,22,13,14,16,7];
let pos, maior = 0;

for (let i = 0; i < vet.length; i++){
    if (vet[i]> maior){
        maior = vet[i];
        pos = i;
    }
}

console.log("O maior valor é "+ maior + " e está na posição "+ pos);