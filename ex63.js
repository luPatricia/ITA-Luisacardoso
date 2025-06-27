const vet = [10,20,30,40,50];
let resultado = [];

let inicio = 0;
let fim = vet.length-1;
let i = 0;

while(inicio <= fim){
    if (inicio == fim){
        resultado[i] = vet[inicio];
        i++;
    }else{
        resultado[i] = vet[inicio];
        i++;
        resultado[i] = vet[fim];
        i++;
    }

  inicio++;
  fim--;
}
for (let l = 0; l< resultado.length; l++){
   console.log(resultado[l]);
}

