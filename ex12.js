const custo_fabrica = 19000000;
const perc_distribuidor = (custo_fabrica * 28)/100;
const perc_imposto = (custo_fabrica*45)/100;
const custo_carro = custo_fabrica + perc_distribuidor + perc_imposto;

console.log("O custo final do carro ao consumidor é de: " + custo_carro);