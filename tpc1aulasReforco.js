/*

Objectivo: Simular um sistema de reserva para um teatro

Regras:
    - 5 filas com 10 assentos
    - Assento pode estar livre ou ocupado
        - L, X

O que temos que fazer

    - Mostrar o mapa atual dos assentos(L = livre, X = ocupado)
    - Perguntar se quer fazer uma reserva
    - Se ele digitar n: Sair
    - Se ele digitar s: continuar
    - Solicitar numero da fila e do assento
    - Se estiver livre: reservar
    - Se estiver ocupado: inforamar que esta ocupado

*/
const teatro = [];

function zerarAssentos() {
    for(let i = 0; i < 5; i++) {
        teatro[i] = [];
        
        for(let j = 0; j < 10; j++) {
            teatro[i][j] = "L";
        }
    }
}

function mostarMapa() {
    console.log("Novo mapa: ")

    for(let i = 0; i < 5; i++) {
        let linha = "";
         for(let j = 0; j < 10; j++){
            linha+= teatro[i][j]+ " ";
         }
        console.log(linha);
    }
}

function verificarAssentoLivre(fila, assento) {
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 10; j++) {
            if(fila == i && assento == j && teatro[i][j] == "X") return false;
        }
    }

    return true;
}

function verificarAssentoExistente(fila, assento){
    if(fila > 4  || assento > 49){
        return false;
    }
    return true;
}






function main() {
    const prompt = require('prompt-sync')();
    zerarAssentos();
    mostarMapa();

     let resposta = "";

   for(let i = 0; i < 50; i++){
         resposta = prompt("Deseja fazer uma reserva?--> s  Deseja sair do programa? --> n  Deseja cancelar uma reserva?n --> c: ");
        
     if(resposta == 's') {
        const prompt = require('prompt-sync')();
         let lugar = prompt("Informe o número da fila e depois o do assento, com um espaço entre eles: ");
    
         let fila = "";
         let assento = "";
         let espaco= false;

      for (let i = 0; i < lugar.length; i++){
          let numero = lugar[i];

             if(numero === " "){
                 espaco = true;
             }else{
                 if(!espaco){
                    fila += numero;
                 }else{
                  assento +=numero;
                 }
             }
        }
        fila = Number(fila);
        assento= Number(assento);
            const assentoInexistente = verificarAssentoExistente(fila, assento);
            const assentoLivre = verificarAssentoLivre(fila, assento);

        if(assentoInexistente){
            if(assentoLivre) {
                teatro[fila][assento] = "X";
                mostarMapa();
            } else {
                console.log("Assento ocupado")
            }
         }else{
            console.log("assento inexistente!")
            mostarMapa();
          }

           
        }
        
      // cancelar //
        else if( resposta == 'c'){
           const prompt = require('prompt-sync')();
          let lugarOcupado = prompt("Informe o número da fila e depois o do assento para cancelar a reserva, com um espaço entre eles: "); 
          let filaOcupada = "";
          let assentoOcupado = "";
          let espaco= false;  
          for (let i = 0; i < lugarOcupado.length; i++){
          let numero = lugarOcupado[i];

             if(numero === " "){
                 espaco = true;
             }else{
                 if(!espaco){
                    filaOcupada += numero;
                 }else{
                  assentoOcupado +=numero;
                 }
             }
        }
          filaOcupada = Number(filaOcupada);
         assentoOcupado= Number(assentoOcupado);

         const assentoExistente = verificarAssentoExistente(filaOcupada, assentoOcupado);
         const assentoParaCancelar = verificarAssentoLivre(filaOcupada, assentoOcupado);

        if(assentoExistente){
            if(assentoParaCancelar) {
                console.log("Assento Livre")
            } else {
                teatro[filaOcupada][assentoOcupado] = "L";
                mostarMapa();
            }
         }else{
            console.log("assento inexistente!")
            mostarMapa();
          }


        }
            
        else if( resposta == 'n'){
            console.log("Volte sempre!")
            break;
        }

      }
    
}


main();


/*

Tarefa

- Vao fazer sem usar o while ou do while
- Verificar se o numero de fila e de assentos existem no teatro
- Mostrar mapa mais bonito
- Sem pedir fila e assento separadamente
- Dar possibilidade de cancelar reserva

*/