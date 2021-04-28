// Hoisting. En JS las declaraciones 'se mueven' al principio de su ámbito

cuadrado(a);

function cuadrado(valor) {
    valor = valor || 0;
    console.log(valor * valor);
}

var a = 12; // Si por algun motivo declaramos una variable por debajo de su uso hay que recordar que solo las declaraciones
            // se mueven al principio.