/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/
let num = parseInt(prompt("Ingrese un número"));
document.write("El número ingresado es: " + num);

if (num % 2 == 0) {
    document.write("<br>El número ingresado es divisible por 2");
} else if (num % 3 == 0) {
    document.write("<br>El número ingreso es divisible por 3");
} else if (num % 5 == 0) {
    document.write("<br>El número ingresado es divisible por 5");
} else if (num % 7 == 0) {
    document.write("<br>EL número ingresado es divisible por 7");
}