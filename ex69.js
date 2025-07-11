let vetor = [1,2,3,4,5,6,7,8,9,10,10,20,30,40,50,60,70,80,90,100, 10, 120,130,140,150,160,170,180,190,200];
let num = 10;
let cont = 0;

for(let i = 0; i< vetor.length; i++){
    if(vetor[i] === num){
        cont++;
    }
}

console.log("O nº "+ num + " aparece "+cont+" vezes no vetor");