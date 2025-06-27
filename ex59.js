const vet = [13,18,14,20,17,5,6,13,12,12.5,14.7,13,14,16,19,15,11,10,9,7];
let media,pequeno = 0;
let soma = 0;
let cont = 0;


for (let i = 0; i < vet.length; i++){
      soma += vet[i];
}
pequeno = soma/vet.length;
media = pequeno.toFixed(2);

 for (let i = 0; i < vet.length; i++){
    if (vet[i]> media){
        cont++;
    }
 }

 console.log ("A média é: "+media+ " o número de alunos com notas superiores a média são "+cont);