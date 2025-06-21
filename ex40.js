let a = 8;
let g = 28;
let precoal = 250*a;
let precoga = 300*g;
let total1, total2 = 0

if (a <= 20){
    let desconto = (precoal * 3)/100;
    total1 = precoal - desconto;
}else {
    let desconto = (precoal * 5)/100;
    total1 = precoal - desconto;
}


if (g <= 20){
    let desconto = (precoga * 4)/100;
    total2 = precoga - desconto;
}else{
      let desconto = (precoga * 6)/100;
    total2 = precoga - desconto;
}

console.log("O preço total do álcool com o respectivo desconto é: "+total1);
console.log("O preço total da gasolina com o respectivo desconto é: "+total2);