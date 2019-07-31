function prueba() {
    var a;
    a = 10;

    alert(`Hola mundo con JS, numero aleatorio ${Math.random()}`);
    a = "Hola";
    alert(`Valor de a: ${a}`);
}

function calcularSeno(valor1) {
    var operacion = 0;
    operacion = Math.sin(valor1);
    alert(`El seno de ${valor1} radianes es = ${operacion}`);
}

function convierteGradosRad(grados) {
    var operacion = 0;
    operacion = grados * Math.PI / 180;

    return operacion;
}

