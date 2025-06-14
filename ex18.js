const hora_inicio = 18;
const hora_final = 9;
let duracao;

if (hora_final >= hora_inicio){
    duracao = hora_final - hora_inicio;
    console.log (" o jogo durou: " +duracao+ "h");
} else {
    duracao =(24 - hora_inicio) + hora_final;
     console.log (" o jogo durou: " +duracao+ "h");
}
