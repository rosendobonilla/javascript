
function tomarDato() {
    var textDato = document.getElementById("textDato");
    return textDato.value;
}

function cambiaLi() {
    for (var index = 0; index < coleccionLi.length; index++) {
        const li = coleccionLi[index];
        li.style.color = "red";
        li.style.fontSize = "20px";
        li.style.listStyle = "none";
        li.style.border = "1px solid blue";
        li.style.textAlign = "center";
    }
}

function nuevoLi() {
    const nuevo = document.createElement('li');
    const lista = document.getElementById('lista');

    nuevo.id = "item";
    nuevo.textContent = tomarDato();

    lista.appendChild(nuevo);
}

//
var botonTomar = document.getElementById("botonTomar");

botonTomar.addEventListener("click", tomarDato, false);

//
var coleccionLi = document.getElementsByTagName("li");

//
var botonCambiar = document.getElementById("botonEjecutar");

botonCambiar.addEventListener("click", cambiaLi, false);

//
var botonAdd = document.getElementById("botonAddElement");

botonAdd.addEventListener("click", nuevoLi, false);

//
var arreglo = [23, 1, 34, 53, 12];

//
const botonMostrarLista = document.getElementById('botonCrearLista');

botonMostrarLista.addEventListener('click', mostrarEnSelect, false);

function limpiaSelect(lista){
    for (var index = arreglo.length; index >= 0; index--) {
        lista.remove(index);
    }
}

function mostrarEnSelect() {
    const select = document.getElementById('listaSelect');

    limpiaSelect(select);

    arreglo.forEach(num => {
        const option = document.createElement('option');
        option.textContent = num;
        select.add(option);
    });
}


