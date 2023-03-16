/*1)Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario. 

var respuesta = prompt("El día de hoy está ... Soleado , Nuablado , Luvioso ");
alert("Como esta el día: " +respuesta);
document.write("Gracias Capo"); */
/*---------------------------------------------------------------------------------------------*/
/*2)Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio  

const radio = prompt("Ingrese el valor del radio de la circunferencia:");
const area = Math.PI * radio ** 2;
const perimetro = 2 * Math.PI * radio;
alert(`El área de la circunferencia es: ${area}`);
alert(`El perímetro de la circunferencia es: ${perimetro}`);*/
/*---------------------------------------------------------------------------------------------*/
/*3)Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo. 
 
let edad = prompt("Ingrese su edad: ");
if (edad < 18) {
    alert("Usted es menor de edad");
}else{
    alert("Usted es mayor de edad");
}*/
/*---------------------------------------------------------------------------------------------*/
/*4)Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.  

var caracteres = prompt("Ingresar S/N");
if (caracteres == "S" || caracteres == "N") {
    alert("Correcto!");
}else{
    alert("Incorrecto!")

}*/
/*---------------------------------------------------------------------------------------------*/
/*5)Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 
 

const num1 = (prompt("Ingrese el primer número:"));
const num2 = (prompt("Ingrese el segundo número:"));
const operacion = prompt("Ingrese la operación a realizar (S, R, M, D):");
let resultado;

switch (operacion.toUpperCase()) {
  case "S":
    resultado = num1 + num2;
    
    break;
  case "R":
    resultado = num1 - num2;
    
    break;
  case "M":
    resultado = num1 * num2;
   
    break;
  case "D":
    resultado = num1 / num2;
    
    break;
  default:
    resultado = "Operación no válida";
    
}
alert(`El resultado entre ${num1} y ${num2} es: ${resultado}`);*/

/*---------------------------------------------------------------------------------------------*/
/*6)Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar” 
var numero = prompt("Ingrese un numero entero")

if (numero === 0) {
    alert("El número no es par ni impar");
}else if (numero % 2 === 0) {
    alert("El Numero " + numero + " es par");
}else{
    alert("El Numero " + numero + " es impar");
}*/

/*---------------------------------------------------------------------------------------------*/

/*7)Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.  */

const limite = parseInt(prompt("Ingrese valor limite positivo"));
let suma = 0;
while (suma < limite) {
    const numero = parseInt(prompt("Ingrese numero positivo"));
    suma += numero;
}
alert("El valor supero o igualo el limite " + suma);

/*---------------------------------------------------------------------------------------------*/