/**
 * Variables globales
 * Referencias al DOM
 */

//Botones
const botonGuardar = document.getElementById('botonGuardar');
const botonMostrarTodos = document.getElementById('botonMostrarTodos');
const modal = document.getElementById('modalComponentes');

//Forms buscar
const formNombre = document.getElementById('form-nombre');
const formMarca = document.getElementById('form-marca');
const formSerie = document.getElementById('form-serie');
const formPrecio = document.getElementById('form-precio');

//inputs
const nombre = document.getElementById('txt-nombre');
const marca = document.getElementById('txt-marca');
const modelo = document.getElementById('txt-modelo');
const serie = document.getElementById('txt-serie');
const precio = document.getElementById('txt-precio');

//Arreglo componentes
var componentes = new arregloComponentes();

/**
 * Métodos
 */

function limpiarInputs() {
    nombre.value = '';
    marca.value = '';
    modelo.value = '';
    serie.value = '';
    precio.value = '';
}

function mostrarInfo() {
    //info badges
    const infototal = document.getElementById('info-total');
    const infocaro = document.getElementById('info-caro');
    const infobarato = document.getElementById('info-barato');

    const infosuma = document.getElementById('info-suma');

    infototal.textContent = componentes.obtenerPosicion();
    infocaro.textContent = componentes.obtenerMasCaro();
    infobarato.textContent = componentes.obtenerMasBarato();
    infosuma.textContent = "$" + componentes.obtenerSumaTotal();
}

function esNumeroValido(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num > 0;
}

function agregarComponente() {

    if (nombre.value !== '' && marca.value !== '' && modelo.value !== '' && serie.value !== '' && precio.value !== '') {
        if (esNumeroValido(precio.value)) {
            componentes.agregarComponente(nombre.value, marca.value, modelo.value, serie.value, precio.value);
            mostrarMensaje("Componente guardado exitosamente.", "success");
            mostrarInfo();
            limpiarInputs();
        }
        else {
            mostrarMensaje("Ingrese un número válido.", "danger");
            precio.value = '';
            precio.focus();
        }
    }
    else
        mostrarMensaje("Ingrese todos los datos solicitados.", "danger");

}

function mostrarTodos() {
    const listaComponentes = document.getElementById('lista-componentes');

    listaComponentes.innerHTML = "";

    listaComponentes.innerHTML = componentes.obtenerTodos();

    $('#modalComponentes').modal('show');
}

function mostrarPorFiltro(tipo, event) {

    //Evitar que el form envíe datos y luego refresque la página, que es su comportamiento por defecto
    event.preventDefault();

    const listaComponentes = document.getElementById('lista-componentes');
    const filtro = document.getElementById(tipo);

    listaComponentes.innerHTML = "";

    if (componentes.obtenerPosicion() > 0)
        listaComponentes.innerHTML = componentes.obtenerPorFiltro(tipo, filtro.value);
    else
        listaComponentes.innerHTML = '<h5>No hay componentes registrados.</h5>';

    $('#modalComponentes').modal('show');
    filtro.value = ''; 
}

function mostrarMensaje(mensaje, claseCss) {

    const div = document.createElement('div');

    div.setAttribute("class", `alert alert-${claseCss} mt-4 mx-auto`);
    div.setAttribute("id", "alert");

    div.innerHTML = mensaje;

    const container = document.getElementById('container');

    const app = document.getElementById("app");

    container.insertBefore(div, app);

    setTimeout(function () {
        document.getElementById('alert').remove();
    }, 1500);
}

function eliminar(event) {

    if (event.target.name === 'eliminar') {
        componentes.eliminarObjeto(event.target.id);
        mostrarInfo();
        event.target.parentElement.parentElement.remove();
        //$('#modalComponentes').modal('hide')
    }
}

/**
 * Eventos
 * click y submit
 */

//Eventos botones
botonGuardar.addEventListener('click', agregarComponente, false);
botonMostrarTodos.addEventListener('click', mostrarTodos, false);
modal.addEventListener('click', eliminar, false);

//Eventos forms
formNombre.addEventListener('submit', () => mostrarPorFiltro('nombre', event), false);
formMarca.addEventListener('submit', () => mostrarPorFiltro('marca', event), false);
formSerie.addEventListener('submit', () => mostrarPorFiltro('serie', event), false);
formPrecio.addEventListener('submit', () => mostrarPorFiltro('precio', event), false);

