let vet = [1,2,3,4];
let aux = 0;

for (let i = 0; i < vet.length; i++){
    for (let j = i; j < vet.length; j++){
        if (i != j){
          aux = vet[i];
          vet[i] = vet[j];
          vet[j] = aux;
        }
        
      
        
    }
}

    console.log(vet);
