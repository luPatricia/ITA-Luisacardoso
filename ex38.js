let data1 = new Date("2007-03-09");
let data2 = new Date("2025-03-09");
let diferenca = 0;
let dias = 0;

if ( data1 > data2){
  diferenca = data1 - data2; 
}

if (data2 > data1){
    diferenca = data2 - data1;
}

dias = diferenca/ (1000*60*60*24);

console.log(dias);