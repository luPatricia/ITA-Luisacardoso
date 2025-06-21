let idade_homem1 = 21;
let idade_homem2 = 34;
let idade_mulher1 = 18;
let idade_mulher2 = 14;
let maiorh,menorh,maiorm,menorm=0

if (idade_homem1 > idade_homem2 ){
    maiorh = idade_homem1;
    menorh= idade_homem2;
}else{
     maiorh = idade_homem2;
     menorh= idade_homem1;
}

if(idade_mulher1> idade_mulher2){
    maiorm = idade_mulher1;
    menorm= idade_mulher2;
}else{
     maiorm = idade_mulher2;
     menorm= idade_mulher1;
}
let soma = maiorh+menorm;

console.log("A soma da idade do homem mais velho com a mulher mais nova é: "+ soma);
console.log("O produto da idade do homem mais novo com a mulher mais velha é: "+ menorh * maiorm);