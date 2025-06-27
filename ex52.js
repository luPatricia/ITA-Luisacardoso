const vet = [1,35,18,89,5,17,1,8,2,1];
let maior= vet[0];
let menor= vet[0];
for (let i = 0; i < vet.length; i++){
    if (vet[i]> maior){
        maior = vet[i];
    }

    if (vet[i] < menor){
        menor = vet[i];
    }
}

console.log("o maior valor é: "+ maior);
console.log ("O menor valor é: "+ menor);