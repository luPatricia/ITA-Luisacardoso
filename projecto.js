let nomeAluno = ["julia","maria", "clara"];
let idadeAluno = [18,20,8];
let generoAluno = ["f","f","f"];
let nota1Aluno = [18,5,20];
let nota2Aluno = [7,0,16];
let mediaAluno = [];
let classificacaoAluno = [];
let soma = 0;
let maior = -Infinity;
let menor = Infinity;
let mediaGeral = 0;
let aprovados=0,reprovados=0,recupecao = 0, idade18 =0;
let nome_Procurado = "maria";

function media(n1,n2){
    return (n1+n2)/2;
}

function classicacao(media){
     if(media >= 10){
       return "Aprovado";
        
     } else if(media >= 8){
        return "Recuperação";
       
     }else{
        return "Reprovado";
        
     }
}
if (nomeAluno.length >= 30){
    console.log("Excedeu o limite de cadastros");
}else{
    for (let i = 0; i < nomeAluno.length; i++){
     mediaAluno[i]= media(nota1Aluno[i], nota2Aluno[i]);
     classificacaoAluno[i] = classicacao(mediaAluno[i]);
}

console.log("Lista dos alunos");
for(let i = 0; i< nomeAluno.length; i++){
    console.log("Nome: "+ nomeAluno[i]+ "  "+"Idade: "+ idadeAluno[i]+"anos"+ "  "+"gênero: " + generoAluno[i]+ "  "+"Nota1: " + nota1Aluno[i]+ "  "+"Nota2: "+nota2Aluno[i]+ "  " +"Média: "+ mediaAluno[i] + "  "+ "Classificação: "+ classificacaoAluno[i]);
}

console.log("---------------------------------------------------------------------------");
for (let i = 0; i < nomeAluno.length; i++){
     if(nome_Procurado === nomeAluno[i]){
        console.log("Aluno procurado: "+nome_Procurado);
        console.log("Nome: "+ nomeAluno[i]+ "  "+"Idade: "+ idadeAluno[i]+"anos"+ "  "+"gênero: " + generoAluno[i]+ "  "+"Nota1: " + nota1Aluno[i]+ "  "+"Nota2: "+nota2Aluno[i]+ "  " +"Média: "+ mediaAluno[i] + "  "+ "Classificação: "+ classificacaoAluno[i]);
     }
}
let indice = 0;
nomeAluno[indice] = "paulo";
idadeAluno[indice] = 14;
generoAluno[indice] = "m";
nota1Aluno[indice] = 6;
nota2Aluno[indice] = 9;
mediaAluno[indice] = media(nota1Aluno[indice],nota2Aluno[indice]);
classificacaoAluno[indice] = classicacao(mediaAluno[indice]);
console.log("---------------------------------------------------------------------------");
console.log("Lista actualizada");
for(let i = 0; i < nomeAluno.length; i++){
  console.log("Nome: "+ nomeAluno[i]+ "  "+"Idade: "+ idadeAluno[i]+"anos"+ "  "+"gênero: " + generoAluno[i]+ "  "+"Nota1: " + nota1Aluno[i]+ "  "+"Nota2: "+nota2Aluno[i]+ "  " +"Média: "+ mediaAluno[i] + "  "+ "Classificação: "+ classificacaoAluno[i]);
}
let indice_remover = 2;
for(let i = indice_remover; i < nomeAluno.length-1; i++){
nomeAluno[i] = nomeAluno[i+1];
idadeAluno[i] = idadeAluno[i+1];
generoAluno[i] = generoAluno[i+1];
nota1Aluno[i] = nota1Aluno[i+1];
nota2Aluno[i] = nota2Aluno[i+1];
mediaAluno[i] = mediaAluno[i+1];
classificacaoAluno[i] = classificacaoAluno[i+1];
}
nomeAluno.length--;
idadeAluno.length--; 
generoAluno.length--;
nota1Aluno.length--;
nota2Aluno.length--;
mediaAluno.length--;
classificacaoAluno.length--;

console.log("---------------------------------------------------------------------------");
console.log("Lista com a remoção de um aluno");
for(let i = 0; i < nomeAluno.length; i++){
  console.log("Nome: "+ nomeAluno[i]+ "  "+"Idade: "+ idadeAluno[i]+"anos"+ "  "+"gênero: " + generoAluno[i]+ "  "+"Nota1: " + nota1Aluno[i]+ "  "+"Nota2: "+nota2Aluno[i]+ "  " +"Média: "+ mediaAluno[i] + "  "+ "Classificação: "+ classificacaoAluno[i]);
}

for( let i = 0; i < nomeAluno.length-1; i++){
    for(let j = i+1; j < nomeAluno.length; j++ ){
        if( nomeAluno[i] > nomeAluno[j]){
            let aux = nomeAluno[i];
            nomeAluno[i] = nomeAluno[j];
            nomeAluno[j] = aux;

            let aux2 = idadeAluno[i];
            idadeAluno[i] = idadeAluno[j];
            idadeAluno[j] = aux2;

            let aux3 = generoAluno[i];
            generoAluno[i] = generoAluno[j];
            generoAluno[j] = aux3;

            let aux4 = nota1Aluno[i];
            nota1Aluno[i] = nota1Aluno[j];
            nota1Aluno[j] = aux4;

            let aux5 = nota2Aluno[i];
            nota2Aluno[i] = nota2Aluno[j];
            nota2Aluno[j] = aux5;

            let aux6 = mediaAluno[i];
            mediaAluno[i] = mediaAluno[j];
            mediaAluno[j] = aux6;

            let aux7 = classificacaoAluno[i];
            classificacaoAluno[i] = classificacaoAluno[j];
            classificacaoAluno[j] = aux7;
        }

        
    
    }
}
console.log("---------------------------------------------------------------------------");
console.log("Lista ordenada por nomes");
 for(let i = 0; i < nomeAluno.length; i++){
    console.log("Nome: "+ nomeAluno[i]+ "  "+"Idade: "+ idadeAluno[i]+"anos"+ "  "+"gênero: " + generoAluno[i]+ "  "+"Nota1: " + nota1Aluno[i]+ "  "+"Nota2: "+nota2Aluno[i]+ "  " +"Média: "+ mediaAluno[i] + "  "+ "Classificação: "+ classificacaoAluno[i]);
 }

 for( let i = 0; i < nomeAluno.length-1; i++){
    for(let j = i+1; j < nomeAluno.length; j++ ){
        if( mediaAluno[i]< mediaAluno[j]){
            let aux = nomeAluno[i];
            nomeAluno[i] = nomeAluno[j];
            nomeAluno[j] = aux;

            let aux2 = idadeAluno[i];
            idadeAluno[i] = idadeAluno[j];
            idadeAluno[j] = aux2;

            let aux3 = generoAluno[i];
            generoAluno[i] = generoAluno[j];
            generoAluno[j] = aux3;

            let aux4 = nota1Aluno[i];
            nota1Aluno[i] = nota1Aluno[j];
            nota1Aluno[j] = aux4;

            let aux5 = nota2Aluno[i];
            nota2Aluno[i] = nota2Aluno[j];
            nota2Aluno[j] = aux5;

            let aux6 = mediaAluno[i];
            mediaAluno[i] = mediaAluno[j];
            mediaAluno[j] = aux6;

            let aux7 = classificacaoAluno[i];
            classificacaoAluno[i] = classificacaoAluno[j];
            classificacaoAluno[j] = aux7;
        }
    
    }
}
console.log("---------------------------------------------------------------------------");
console.log("Lista ordenada por média");
 for(let i = 0; i < nomeAluno.length; i++){
    soma += mediaAluno[i];
    console.log("Nome: "+ nomeAluno[i]+ "  "+"Idade: "+ idadeAluno[i]+"anos"+ "  "+"gênero: " + generoAluno[i]+ "  "+"Nota1: " + nota1Aluno[i]+ "  "+"Nota2: "+nota2Aluno[i]+ "  " +"Média: "+ mediaAluno[i] + "  "+ "Classificação: "+ classificacaoAluno[i]);
 }

 for (let i = 0; i < nomeAluno.length; i++){
    if(classificacaoAluno[i]=== "Aprovado"){
          aprovados++;
    }else if(classificacaoAluno[i]=== "Recuperação"){
         recupecao++;
    }else{
        reprovados++;
     }
    
     if(mediaAluno[i] > maior){
        maior = mediaAluno[i];
     }

     if(mediaAluno[i] < menor){
        menor = mediaAluno[i];
     }

}
for(let i = 0; i < idadeAluno.length; i++ ){
    if(idadeAluno[i] >= 18){
        idade18++;
    }
}

 mediaGeral = soma / mediaAluno.length;
console.log("Média Geral da Turma: "+mediaGeral.toFixed(2));
console.log("Maior média: "+maior);
console.log("Menor média: "+menor);
console.log("Total de alunos aprovados: "+aprovados);
console.log("Total de alunos reprovados: "+reprovados);
console.log("Total de alunos em recuperação: "+recupecao);
console.log("Número de Alunos maiores de 18 anos "+idade18);

}
