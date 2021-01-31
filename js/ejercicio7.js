/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*/

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

document.write("El primer número es: " + num1);
document.write("<br> El segundo número es: " + num2);
document.write("<br> El tercer número es: " + num3);

if (num1 > num2 && num1 > num3) {
    document.write("<br> El número " + num1 + " es el mayor");
} else {
    if (num2 > num1 && num2 > num3) {
        document.write("<br> El número " + num2 + " es el mayor");
    } else {
        document.write("<br> El número " + num3 + " es el mayor");
    }
}