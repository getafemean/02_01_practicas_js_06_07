// Ámbito de las variables y constantes (dependiendo de su declaración)

// Variables declaradas con var
// el ámbito es el de la función más próxima

var apellidos = 'López Pérez'; // ámbito global
var apellidos = 'Fernández Pérez'; // Permite redeclarar sin error (aunque es mala práctica)

function setMayorEdad(edad) {
    if(edad >= 18) {
      var adulto = true;  // contexto de la función
    } else {
      var adulto = false; // contexto de la función
    }
    console.log(adulto);
}

// console.log(adulto); errpr porque adulto está en el ámbito de la función setMayorEdad

setMayorEdad(30);
setMayorEdad(10);

// Variables o constantes declaradas con let o const
// el ámbito es el bloque más próximo

let ciudad = 'Barcelona'; // ámbito global
// let ciudad = 'Caracas'; error al redeclarar

function setPuntuacion (puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;
    } else {
        let apto = false;
    }
    // console.log(apto); error porque el ámbito de ambas variables es cada cuerpo del if else
}

setPuntuacion(8);
setPuntuacion(5);

// Variables declaradas sin let ni var (globales siempre) ¡Mala práctica!

function areaTriangulo(a, b) {
    area = .5 * a * b;
}

areaTriangulo(10, 20);

console.log(area); // No devolverá error porque area es siempre global