const vet = ["juliana","Carla","Maria","Carlos","Mario","Janu","Pedro","Marcos","Rafael","Luisa"];
const nome = "juliana";

for(let i = 0; i < vet.length; i++){
    if(vet[i] === nome){
        console.log("Achou");
        break;
    }else{
        console.log("Não achou");
        
    }
}