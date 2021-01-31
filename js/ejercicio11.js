/*
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/

let num = parseInt(prompt("Ingrese un número"));
document.write("El número ingresado es: " + num);

if (num % 2 == 0) {
    document.write("<br>El número es divisible por 2");
}
if (num % 3 == 0) {
    document.write("<br>El número es divisible por 3");
}
if (num % 5 == 0) {
    document.write("<br>El número es divisible por 5");
}
if (num % 7 == 0) {
    document.write("<br>El número es divisible por 7");
}