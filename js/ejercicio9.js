//length nos devuelve la cantidad de caracteres
//substr me permirte selecionar una porcion de una palabra substr(0,1) desde donde quiero tomar el caracter, cuantos caracteres quiero tomar a partir de la posicion indicada
let frase = prompt("Ingrese una frase");
let longitud = frase.length;
console.log("la frase tiene " + longitud + " caracteres");
document.write("La frase ingresada es: " + frase);

let x = 0;
let vocales = 0;
while (x <= longitud) {
    console.log(frase.substr(x, 1));
    if (frase.substr(x, 1) == "a") {
        //document.write("<br>la frase contiene la vocal a");
        vocales++
    } else if (frase.substr(x, 1) == "e") {
        //document.write("<br>la frase contiene la vocal e");
        vocales++
    } else if (frase.substr(x, 1) == "i") {
        //document.write("<br>la frase contiene la vocal i");
        vocales++
    } else if (frase.substr(x, 1) == "o") {
        //document.write("<br>la frase contiene la vocal o");
        vocales++
    } else if (frase.substr(x, 1) == "u") {
        //document.write("<br>la frase contiene la volcal u")
        vocales++
    }

    x++
}
document.write("<br>la frase tiene " + vocales + " vocales");