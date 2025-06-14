const carros_vendidos = 12;
const valor_vendas = 12000000;
const salario = 300000;
const valor_carros = 35000;
const perc_vendas = (valor_vendas * 5)/ 100;

let salario_final;

salario_final = salario + valor_carros + perc_vendas;
console.log ("O salario final do vendedor é de: "+ salario_final);