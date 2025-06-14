const lado1 = 7;
const lado2 = 3;
const lado3 = 9;

if ((lado1 === lado2) && (lado2 !== lado3)){
    console.log("é um triângulo isósceles");
} else 
if((lado1 === lado2) && ( lado2 === lado3)){
   console.log("é um triângulo Equilátero");
} else{
       console.log("é um triângulo Escaleno");
}