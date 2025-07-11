let vetor = [1,2,3,4,5,6,7,8,9,10,11,20,30,40,50,60,70,80,90,100,10,11,120,11];
let verificados = [];
let tamVerficados = 0;

for(let i = 0; i < vetor.length; i++){
    let num = vetor[i];
    let verficado = false;

for(let j = 0; j < tamVerficados; j++){
    if(verificados[j] === num){
        verficado = true;
    }
}

if(!verficado){
    let repetido = 0;
    let posicao = [];
    let pos = 0;

    for(let l = 0; l < vetor.length; l++){
        if(vetor[l] === num){
            posicao[pos] = l;
            pos++;
            repetido++;
        }
    }

    if(repetido > 1){
        console.log("O nº repetido: "+num);
        console.log("Aparece nas posições: ");
        for(let m = 0; m < pos; m++){
            console.log(posicao[m]);
        }
    console.log("------------------------------------");
    }
    verificados[tamVerficados] = num;
    tamVerficados++;
}

}