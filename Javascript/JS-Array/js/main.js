var arreglo = new Array();

var posicion = 0;

//Funcion para insertar un nuevo numero en el arreglo
function insertarArreglo() {

    //Referencia al input del numero
    const numero = document.getElementById("txtNumero");

    if (numero.value !== '') {
        //Referencia al badge que muestra el total
        const total = document.getElementById("total");

        //Agregamos el numero al arreglo
        arreglo[posicion] = numero.value;

        //Llamamos al metodo para mostrar notificacion
        this.mostrarMensage(`Numero ${numero.value} agregado correctamente.`, "success");

        //Aumentamos el contador de la posicion
        posicion++;

        //Asignamos el total de elementos al badge total
        total.textContent = posicion;

        numero.value = "";
    }
    else {
        this.mostrarMensage("Por favor, ingresa un número.", "danger");
    }

}

//Funcion para mostrar todos los numero guardados en el arreglo
function mostrarDatos(tipo, posicionEncontrado) {
    var text;

    if (arreglo.length !== 0) {
        //Referencia al div contenedor de la lista y limpiamos
        var div = document.getElementById("div-lista");
        div.innerHTML = "";

        //Crear elemento lista y su clase de Bootstrap
        const lista = document.createElement("ul");
        lista.setAttribute("class", "list-group mt-4");


        for (var index = 0; index < posicion; index++) {
            //Creamos un nuevo elemento para la lista
            const item = document.createElement('li');

            if (tipo === "busqueda") {
                if (posicionEncontrado === index) {
                    item.setAttribute("class", "list-group-item list-group-item-danger");
                    text = document.createTextNode(`${arreglo[index]} encontrado en la posicion ${posicionEncontrado} del array`);
                }
                else {
                    item.setAttribute("class", "list-group-item list-group-item-primary");
                    text = document.createTextNode(arreglo[index]);
                }
            }
            else {
                //Establecemos la clase del elemento de Bootstrap
                item.setAttribute("class", "list-group-item list-group-item-primary");
                //Crear texto para el elemento li
                text = document.createTextNode(arreglo[index]);
            }
            //Agregamos el texto al elemento li
            item.appendChild(text);

            //Agregamos el elemento li a la lista
            lista.appendChild(item);
        }
        //Agregamos la lista al div
        div.appendChild(lista);
    }
    else {
        this.mostrarMensage("No hay elementos guardados en el arreglo.", "danger");
    }

}

//Funcion para recorrer el arreglo y buscar un numero determinado
function buscarNumero() {
    const textoBuscar = document.getElementById("textoBuscar");
    var posicionEnc = 0;
    var encontrado = 0;

    if (textoBuscar.value !== "") {
        if (arreglo.length !== 0) {

            for (var index = 0; index < posicion; index++) {
                if (textoBuscar.value === arreglo[index]) {
                    return this.mostrarDatos("busqueda", posicionEnc);
                }
                else {
                    encontrado = 0;
                }
                posicionEnc++;
            }

            if (encontrado === 0) {
                this.mostrarMensage("El número no se encontró en el arreglo.", "danger");
                this.mostrarDatos("normal", "");
            }
        }
        else {
            this.mostrarMensage("No hay elementos guardados en el arreglo.", "danger");
        }
    }
    else {
        this.mostrarMensage("Ingresa el número a buscar.", "danger");
    }
}

//Funcion para mostrar todos los mensajes en pantalla
function mostrarMensage(mensaje, claseCss) {

    //Creamos un div para mostrar un mensaje de notificacion
    const div = document.createElement('div');

    //Establecemos la clase alert y el id
    div.setAttribute("class", `alert alert-${claseCss} mt-2 mx-auto w-75`);
    div.setAttribute("id", "alert");

    //Creamos el texto y lo agregamos al div
    const texto = document.createTextNode(mensaje);
    div.appendChild(texto);

    //Referencia al contenedor principal
    const container = document.getElementById('container');

    //Referencia al div de la app como tal
    const app = document.getElementById("app");

    //Insertamos el div creado al contenedor principal antes del div de la aplicacion
    container.insertBefore(div, app);

    //Removemos el div creado despues de 1.5 segundos
    setTimeout(function () {
        document.getElementById('alert').remove();
    }, 1500);
}