/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

document.write("El primer número es: " + num1);
document.write("<br>El segundo número es: " + num2);

if (num1 < num2) {
    document.write("<br>El número mayor es: " + num2);
} else {
    document.write("<br>El número mayor es: " + num1);
}