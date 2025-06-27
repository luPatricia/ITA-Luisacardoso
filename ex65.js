const senha = "123@ss";
let numero = false;
let carac_especial = false;
let tamanho = senha.length >= 8;

for (let i = 0; i < senha.length; i ++){
    let num = senha[i];
    
    if ((num >= 0) && (num <= 9)){
        numero = true;
    }

    if (!((num >= 'a' && num <= 'z')||
           (num >= 'A' && num <='Z')
        || (num >= 0 && num <= 9))){
            carac_especial = true;
      }
}

if (numero && carac_especial && tamanho){
    console.log("Senha forte");
}else{
    console.log("Senha fraca");
}