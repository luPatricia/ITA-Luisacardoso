const horas_trabalhadasM = 161;
const salario_hora = 5000;
const perc_acrescimo = (5000*50)/100;
let salario_total;

if (horas_trabalhadasM <= 160){
    salario_total = horas_trabalhadasM* salario_hora;
    console.log("O salário do funcionário é: "+ salario_total);
} else{
     salario_total = (horas_trabalhadasM* salario_hora) + perc_acrescimo;
    console.log("O salário do funcionário é: "+ salario_total);
}