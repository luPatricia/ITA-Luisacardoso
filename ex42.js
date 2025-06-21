let qtd_maca = 5;
let qtd_morando = 9;
let preco_maca, preco_morango,total_compra_morando, total_compra_maca = 0;
let totalkg, total_compra = 0;

if ((qtd_maca <= 5) && (qtd_morando <=5)){
    preco_maca = 1500;
    preco_morango= 2000;
}else{
    preco_maca = 1250;
    preco_morango = 1800;
}


total_compra_maca= preco_maca*qtd_maca;
total_compra_morando= preco_morango*qtd_morando;

totalkg= qtd_maca + qtd_morando;
total_compra= total_compra_maca+total_compra_morando;

if((totalkg > 8) || (total_compra> 20000)){
    let desconto = (total_compra*10)/100;
    total_compra = total_compra-desconto;
}

console.log("O valor a ser pago é: "+ total_compra);
