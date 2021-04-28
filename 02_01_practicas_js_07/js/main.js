// Sintaxis de declaración de funciones

function suma (a, b) {
    console.log(a + b);
}

// Sintaxis de invocación

suma(4, 6);

// Funciones que devuelven valor

let resultado = division(10,2);
console.log(resultado);

function division (a, b) {
    let c = a / b;
    return c;
    console.log('Hola'); // No se ejecuta lo que esté declarado tras return
}

// Expression functions (anónimas)

let cuadrado = function (a) {
    return a * a;
} 

console.log(cuadrado(5));

// Funciones flecha ECMA6

// let cubo = (a) => {
//     return a * a * a;
// }

// Si solo tienen un parámetro se pueden aliviar los paréntesis
// Si solo tienen una línea en el cuerpo de la función se pueden aliviar las llaves
// En el caso anterior si tiene return también se puede aliviar

let cubo = a => a * a * a;

console.log(cubo(5));

// Autoinvocadas (<funcion>)()

(function (mensaje) {
    mensaje = 'Hola'
    console.log(mensaje);
})()
