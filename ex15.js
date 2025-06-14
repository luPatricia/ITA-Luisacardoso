const num_conta = 3344888;
const saldo = 50000;
const debito = 56000;
const credito = 5000;
let saldo_final;

saldo_final = saldo - debito + credito;

if ( saldo_final >= 0){
   console.log("O cliente "+ num_conta+" Tem um saldo positivo de: "+ saldo_final);
} else{
    console.log("O cliente "+ num_conta +" Tem um saldo negativo de: ");
}