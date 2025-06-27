const qtd = 4
const vet= [40,2,8,10];
let soma = 0;
let  maior = vet[0];
let media;

for (let i = 0; i < vet.length; i++){
       soma += vet[i];
}

for (let i = 0; i < vet.length; i++){
    if (vet[i] > maior){
        maior = vet[i];
    }
}

media = soma/qtd;

console.log("A média dos valores é: "+ media);
console.log("O maior valor é: "+ maior);
