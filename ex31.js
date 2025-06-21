let num = [10, 20, 40, 80, 14, 9, 99,4];
let maior = 0;

for (let i = 1; i < num.length-1; i++){
    if (num[i]> maior){
        maior = num[i];
    }
}

console.log("O maior é "+ maior);