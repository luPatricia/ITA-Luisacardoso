const salario = 900000;
const valor_vendas = 500000;
let salario_total;
let comissao;

if (valor_vendas <= 500000){
   comissao = (valor_vendas * 3)/ 100;
} else {
    comissao = (valor_vendas * 5)/ 100;
}

salario_total = salario + comissao;
console.log (salario_total);
