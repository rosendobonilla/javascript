/* text1 = document.getElementById("txt1");

text1.value = "Mensaje de ejemplo"; */
var perro = new Perro();

function buttonClick() {
    var ref2 = document.getElementById("txt1");
    ref2.value = "Modificado desde evento JS";
}

function asignaDatos() {
    var t1, t2, t3;

    t1 = document.getElementById("txtApodo");
    t2 = document.getElementById("txtColor");
    t3 = document.getElementById("txtRaza");

    perro.Apodo = t1.value;
    perro.Color = t2.value;
    perro.Raza = t3.value;
}

function mostrarDatos() {
    alert(perro.getDatos());
}