const codigo_correto = 1234;
const senha_correta = 9999;
let codigo_inserido = 1234;
let senha_inserida = 6666;

if (codigo_inserido === codigo_correto){
    if(senha_inserida=== senha_correta){
        console.log("Acesso permitido");
    } else{
         console.log("Senha incorreta");
    }
}else{
     console.log("Usuário inválido");
}