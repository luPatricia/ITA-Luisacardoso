const palavra = "ssgggaaa";
let cont = 0;
for (let i = 0; i < palavra.length; i++){
    letra = palavra[i]
        
    if (letra >= 'a' && letra <= 'z'
        && letra !='a' && letra !='e' 
        && letra !='i' && letra !='o' && letra!='u'){
            cont ++;
        }

}

console.log("A palavra tem "+ cont +" consoantes");