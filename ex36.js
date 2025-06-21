let frase = "Eu gosto de comer";
let palavras = frase.split(" ");
let invertida = "";

for (let i =  palavras.length-1; i >= 0; i--){
    invertida = invertida + palavras[i];
    if (i > 0){
        invertida = invertida + " ";
    }
}

console.log (invertida);