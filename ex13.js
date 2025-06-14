const qtd_maxima = 3000;
const qtd_minima = 1000;
const qtd_actual = 2500;
let qtd_media;

qtd_media = (qtd_actual+qtd_maxima+qtd_minima)/3;
console.log("A quantidade Média é: " + qtd_media);

if ( qtd_actual >= qtd_media ){
    console.log("Não efectuar compra")
}else{
    console.log("Efectuar compra")
}





