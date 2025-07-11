const nome = "francisco";
let vogais= ['a','e','i','o','u'];
let primeira_letra = nome[0];
let ultima_letra =nome[nome.length-1];
let comeca= false;
let termina =false;
let cont = 0;

for (let i = 0; i < vogais.length; i++ ){
     if(primeira_letra == vogais[i]){
        comeca = true;
        break;
    }
}
for ( let i = 0; i < vogais.length; i++){
    if(ultima_letra == vogais[i]){
        termina = true;
        break;
    }
}
for(let i = 0; i < vogais.length; i++){
  for (let j = 0; j < vogais.length; j++){
    if(nome[i] == vogais[j]){
        cont++;
    }
  }
}

if((comeca == true) && (termina == true)){
    console.log("é especial");
}else{
    console.log("não é especial");
}
    




