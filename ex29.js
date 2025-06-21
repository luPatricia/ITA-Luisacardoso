const num = 12;
let a = 0;
let b = 1;
let proximo;

if (num == 1){
    console.log(a);
}

if (num == 2){
    console.log(a+" "+b);
}

if (num > 2){
     console.log(a);
     console.log(b);

     for (let i = 2; i < num; i++){
          proximo = a + b;
          console.log (proximo);
          a = b;
          b = proximo;
     }
}