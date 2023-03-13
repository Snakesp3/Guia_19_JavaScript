//Ejercicio 1
/*var mensaje=prompt("como esta el dia de hoy?");
alert(mensaje);
*/

/*
Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio  */

//ejercicio 2
/*
const Pi=3.1416;

var radio = prompt("Ingrese el radio");

var area = Pi*(radio*radio);

var perimetro = 2* Pi*radio;

alert("el area es " + area +" "+" y el perimetro es " + perimetro);

*/

//ejercicio 3
/*
var edad=prompt("ingrese su edad");

if(edad>=18){

    console.log("Usted es mayor de Edad");

}else{
    console.log("usted es menor de edad");
}
*/

//ejercicio 4
/*Realiza un programa que sólo permitia introducr los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
*/
/*
var caracter;

caracter=prompt("ingrese un caracter");

if(caracter.toLowerCase() == "s" || caracter.toLowerCase()=="n"){

    console.log("Correcto");

}else{

    console.log("incorrecto");

}
*/

//Ejercicio 5
/*
Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

*/
/*
var num1, num2;

var operacion="";
var resultado=0;
operacion=prompt("ingrese la operacion a realizar:\n S=suma, D=Division, M=Multiplicacion, R=resta");
num1=prompt("ingrese el primer numero entero");
num2=prompt("ingrese el segundo numero entero");

switch (operacion.toLowerCase()) {
    case "s":

            resultado=num1+num2;
            console.log("el resultado de la suma es " + resultado);
        
        break;
    case "r":
            resultado=num1-num2;
            console.log("el resultado de la resta es " + resultado);
        break;
    case "m":
            resultado=num1*num2;
            console.log("el resultado de la multiplicacion es "+ resultado);
        break;
    case "d":
            if(num2!=0){
            resultado=num1/num2;
            console.log("el resultado de la division es "+ resultado);
            }else{
                console.warn("El divisor no puede ser 0");
            }
          break;  
            
    default:
        console.log("Ingrese una operacion correcta");
        break;
}
*/

//Ejercicio 6
/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/
/*
var num=prompt("ingrese un numero entero");
if (num==0) {
    console.log("el numero no es par ni impar");
} else {
    if(num % 2 == 0){

        console.log("el numero es par");
    
    }else{
        console.log("el numero es impar");
}
}
*/
/*EJERCICIO 7
Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.
*/
/*
limite=prompt("ingrese un valor limite");

var contador=0;


do {
    numero=prompt("ingrese el valor a sumar");
    
    contador+=Number(numero);  

} while (contador<=limite);



console.log("el valor limite fue superado ");

*/

//Ejercicio 8
/*
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.
*/
/*
var min=9999;
var max=0;
var promedio=0;
var num=0;
var contador=-1;
var suma=0;

do {
    
    num=prompt("ingrese un nuevo numero entero");

    if(min>num && num!=0){
        min=num;
    }
    if(max<num && num!=0){
        max=num;
    }
         
 suma=suma+Number(num);
 contador++;

} while (num!=0);

promedio=suma/contador;
console.log(suma);
console.log(contador);

console.log(`el promedio de los numeros es ${promedio},
 el valor maximo es ${max} mientras que el valor minimo es ${min}`);

*/
/*
Ejercicio 9
Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().
*/

var cadena=prompt("ingrese una frase");
console.log(cadena);


var arrayCadena=cadena.split('');
console.log(arrayCadena);


var fraseFinal=arrayCadena.join(" ");
console.log(fraseFinal);


//Ejercicio 10
//Escribir una función flecha que reciba una palabra y la devuelva al revés.
/*
*/
var Frase=prompt("ingrese una palabra");


var Invertir=(Frase)=> Frase.split('').reverse().join("");

var fraseFinal=Invertir(Frase);



console.log(fraseFinal);


//Ejercicio 11

//Escribir una función que reciba un String y devuelva la palabra más larga.
//String Ejemplo: “Guia de JavaScript”
//Resultado esperado : “JavaScript”*/


var frase=prompt("ingrese una frase");

const arrayCadena=frase.split(' ');

var palabraMasLarga=arrayCadena[0];

for (const palabra of arrayCadena) {
    if(palabra.length >= palabraMasLarga.length){
        palabraMasLarga=palabra;
    }
}

console.log(palabraMasLarga);


//Ejercicio 12
//Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
//dato.


var frase="Es un dia de JAvascript";
var numero=2500;
var valor=false;

var funcionDato=(e)=>typeof(e);

console.log(`El tipo de datos de frase es ${funcionDato(frase)}, 
por siguiente el valor de numero es ${funcionDato(numero)}, y por ultimo el valor de valor ${funcionDato(valor)} `  ) ;

 
