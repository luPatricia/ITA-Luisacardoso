let vetor = [100,90,80,70,60,50,40,30,20,10];

for (let i = 0; i < vetor.length-1; i++){
    for(let j = i; j < vetor.length; j++){
        if(vetor[i] > vetor[j]){
            let aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
    }

}
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

let numero = 22;
let i;
for(i = 0; i < vetor.length; i++ ){
    if(numero < vetor[i]){
    break;
    }
}

vetor[vetor.length] = 0;
for(let j = vetor.length-1; j > i; j--){
    vetor[j] = vetor[j-1];
}

vetor[i] = numero;
console.log(vetor);