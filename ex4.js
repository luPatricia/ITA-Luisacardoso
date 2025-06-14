let ano = 2000;

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
    console.log(ano +" é um ano bissexto");
} else {
    console.log(ano + "Não é um ano bissexto");
}

