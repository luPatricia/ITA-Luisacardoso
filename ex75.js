let string = "algoritmo";
let vogais= ['a','e','i','o','u'];
let nova_string = "";


for(let i = 0; i < string.length; i++){
    let letra = string[i];
    let vogal = false;

    for(let j = 0; j < string.length; j++){
        if(letra === vogais[i]){
            vogal = true;
        }
    }
    
    if(vogal){
        nova_string += "*";
    }else{
        nova_string +=letra;
    }
}

console.log("Frase original: "+string);
console.log("Nova frase: "+nova_string);