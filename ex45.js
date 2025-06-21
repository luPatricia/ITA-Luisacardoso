let codigo_empregado = 2345;
let ano_nascimento = 1965;
let ano_ingresso = 1997;
let idade_funcionario, tempo_trabalho = 0;
let agora = new Date();
let ano_actual = agora.getFullYear();

idade_funcionario = ano_actual - ano_nascimento;
tempo_trabalho =  ano_actual- ano_ingresso ;

if((idade_funcionario >= 65)|| (tempo_trabalho >=30)|| ((idade_funcionario >=60)&& (tempo_trabalho>=25))){
    console.log("O empregado"+codigo_empregado+"está qualificado para a aposentadoria");
} else{
      console.log("O empregado"+codigo_empregado+"não está qualificado para a aposentadoria");
}

console.log("Idade: "+ idade_funcionario);
console.log("Anos trabalhados "+ tempo_trabalho);
