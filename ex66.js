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