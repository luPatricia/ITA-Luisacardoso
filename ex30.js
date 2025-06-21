let num = 4444;
let original = num;
let inverso = 0;

while (num > 0){
    let resto = num % 10;
    inverso = inverso * 10 + resto;
    num = (num/10) | 0;
}

if (original === inverso){
    console.log("É Palíndromo");
}else{
    console.log("Não é palíndromo");
}