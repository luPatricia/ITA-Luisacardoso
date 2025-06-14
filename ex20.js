const valor1 = 9;
const valor2 = 1;
const valor3 = 6;
let maior;
let segundom;
let soma;

if(valor1>=valor2 && valor1 >= valor3){
    maior = valor1;
 if(valor2 >= valor3){
      segundom = valor2;
 } else {
    segundom = valor3;
 }
    
  
} else if (valor2>=valor1 && valor2 >= valor3){
    maior = valor2;
    if (valor1>=valor3){
         segundom = valor1;
 } else {
    segundom= valor3
    }
    
 } else {
    maior = valor3;
    if( valor1>= valor2){
        segundom = valor1;
    } else{
        segundom = valor2;
    }
 }
  

  
  soma = maior + segundom;
  console.log("A soma é: "+ soma); 

  const x = 3;
  const y = 2;
  const z = (x*y) + 5;
  let resposta;

 if (z <= 0){
   resposta = 'A';
 } else if(z <= 100){
   resposta = 'B';
 } else {
   resposta = 'C';
 }

 console.log (resposta);