var prompt = require('prompt-sync')();

let numero1 = Number( prompt('digite o  1º número: '));
let operacao = prompt('digite a operacao ( +; - ; / ; * ): ');
let numero2 = Number(prompt('digite o  2º número: '));
let resultado;


function soma (num1, num2){
    return num1 + num2;
}

function subtracao (num1, num2){
    return num1 - num2;
}

function divisao (num1, num2){
     if (num2 === 0){
        return "divisão por 0";
     } else {
        return num1/ num2;
     }
}

function multipicacao (num1, num2){
    return num1 * num2;
}

switch (operacao){
  case "+":
    resultado = soma(numero1,numero2);
    break;

  case "-":
    resultado = subtracao(numero1, numero2);
    break;

  case "*":
    resultado = multipicacao(numero1,numero2);
    break;

  case "/":
    resultado = divisao(numero1, numero2);
    break;

  default:
     resultado = "Operação indisponível";
}

console.log( " Resultado " + resultado);
