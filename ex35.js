let vet=[2,1,3,2,5,8,2];
let frequencia = [];
let valores = [];
let unicos = 0;


for (let i = 0; i < 5; i++ ){
    let achado = false;
for (let j = 0; j < unicos; j++){
    if (vet[i]=== vet[j]){
        achado = true;
        frequencia[j]++;
        break;
    }
}

 if (achado == false){
    valores[unicos] = vet[i];
    frequencia[unicos] = 1;
    unicos++;
 }
}


let moda = frequencia[0];

for (let i = 1; i < unicos; i++){
    if (frequencia[i]> moda){
        moda = frequencia[i];
    }
}


for (let i = 0; i < unicos; i++){
    if (frequencia[i] === moda){
    console.log("A moda é:" + valores[i]);
    }
}