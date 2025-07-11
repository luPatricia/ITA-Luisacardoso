let vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let num = 1;
let existe = false;

console.log("O número digitado é: "+num);
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] === num){
        existe = true;
        break;
    }
}



if(existe){
    let novo_vetor = [];
    for(let i = 0; i < vetor.length; i++){
        if( vetor[i] !== num){
            novo_vetor[novo_vetor.length] = vetor[i];
        }
    }
    console.log("O vetor original: "+vetor);
    console.log("---------------------------------------");
    console.log("O novo vetor: "+novo_vetor);
}else{
    console.log("O número não existe no vetor");
}

