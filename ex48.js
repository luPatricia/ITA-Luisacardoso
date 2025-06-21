let vet = [1,-2,-7,14,18,-6,18,20,23,-2];
let cont = 0;
for (let i = 0; i <= vet.length; i++){
    if (vet[i] < 0){
          cont++;
    }
}

console.log(cont+" valores são negativos")