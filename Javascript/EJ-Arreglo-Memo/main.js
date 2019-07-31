var arreglo = new Array();
var posicion = 0;

function guardarNumero() {
    const textoNumero = document.getElementById("textNumero");

    arreglo[posicion] = textoNumero.value;

    posicion++;
    alert('Número ' + textoNumero.value + ' agregado.');
    textoNumero.value = "";
}


function mostrarNumeros() {
    const textSalida = document.getElementById("textSalida");

    var cadenaSalida = "Números:  ";
    for (var index = 0; index < posicion; index++) {
        const num = arreglo[index];

        cadenaSalida += num + '   ';
    }
    textSalida.value = cadenaSalida; 
}