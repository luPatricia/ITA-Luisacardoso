let vet = [1200,7,19,20,10,90,1,15,3,555];
let cont1 = 0;
let cont2 = 0;

for (let i = 0; i < 10; i++ ){
    if (vet[i]>= 10 && vet[i]<= 20){
        cont1++;
    }else{
        cont2++;
    }
}

console.log(cont1 + "valores estão dentro do intervalo[10,20]");
console.log(cont2 +" valores estão fora do intervalo [10,20]");