const vet = [0,1,2,3,4,5,6,7,8];
for (let i = 8; i >=5; i--){
     let aux = vet[i];
     vet[i] = vet[8-i+1];
     vet[8-i+1] = aux;
}

vet[3] = vet[1];
vet[vet[3]] = vet[vet[2]];

for(let i = 0; i <= vet.length-1; i++){
    console.log(vet[i]);
}

