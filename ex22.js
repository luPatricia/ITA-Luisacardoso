const num = 7;
let div;

for ( let i = 1; i <= num; i++){
      div = 0;
    for ( let j = 1; j <= i; j++){
          if (i % j == 0){
              div++;
        }
    }
       
 }

if (div == 2){
    console.log (num +" É um número primo");
}else{
    console.log (num +" não é um número primo");
}