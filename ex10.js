const eleitores = 5300;
const votos_brancos = 2200;
const votos_nulos = 1800;
const votos_validos = 1300;

const percentual_brancos = (votos_brancos/eleitores) * 100;
const percentual_nulos = ( votos_nulos/eleitores) * 100;
const percentual_validos = (  votos_validos /eleitores) * 100;

console.log("O percentual dos votos brancos é: " + percentual_brancos)
console.log("O percentual dos votos nulos é: " + percentual_nulos)
console.log("O percentual dos votos validos é: " + percentual_validos)