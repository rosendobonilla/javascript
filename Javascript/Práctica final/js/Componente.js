/**
 * Clase Componente
 * Propiedades y método mostrar datos
 */

function Componente() {

    this.Nombre = "";
    this.Marca = "";
    this.Modelo = "";
    this.Serie = "";
    this.Precio = 0;

    this.MuestraDatos = function () {
        return this.Nombre.toUpperCase() + " " + this.Marca.toUpperCase() + " $" + this.Precio;
    }
}

/**
 * Clase arreglo de componentes
 * 
 */

function arregloComponentes() {

    var arregloComponentes = new Array();
    var posicion = 0;

    //Propiedades
    this.obtenerPosicion = function () {
        return posicion;
    }

    //Métodos
    this.agregarComponente = function (nom, mar, model,ser, pre) {
        var componente = new Componente();
        componente.Nombre = nom;
        componente.Marca = mar;
        componente.Modelo = model;
        componente.Serie = ser;
        componente.Precio = pre;

        arregloComponentes[posicion] = componente;

        posicion++;
    }

    this.obtenerMasCaro = function () {
        var caro = -1;
        var cadena = '';

        if (arregloComponentes.length === 0)
            return '-';

        arregloComponentes.forEach(componente => {
            if (Number(componente.Precio) > caro) {
                caro = componente.Precio;
                cadena = componente.MuestraDatos();            
            }
        });
        return cadena;
    }
    
    function precioMayor() {
        var mayor = -1;

        arregloComponentes.forEach(componente => {
            if (Number(componente.Precio) > mayor)
                mayor = componente.Precio;
        });
        
        return mayor
    }

    this.obtenerMasBarato = function () {
        var barato = precioMayor() + 1;
        var cadena = '';

        if (arregloComponentes.length === 0)
            return '-';

        arregloComponentes.forEach(componente => {
            if (Number(componente.Precio) < barato) {
                barato = componente.Precio;
                cadena = componente.MuestraDatos();
            }
        });
        return cadena;
    }

    this.obtenerSumaTotal = function () {
        var suma = 0;
        arregloComponentes.forEach(componente => {
            suma += Number(componente.Precio);
        });
        return suma;
    }

    function obtenerCadenaHTML(componente, posicion) {
        return `
        <div class="card mb-3">
            <div class="card-header">
                <strong> ${componente.Nombre} </strong>
                <input id=${posicion} name="eliminar" type="button" value="Eliminar" class="btn btn-danger float-right">

            </div>
            <div class="card-body">
                Marca: ${componente.Marca}
                <br>
                Modelo: ${componente.Modelo}
                <br>
                No. de serie: ${componente.Serie}
                <br>
                Precio: $ ${componente.Precio}
                <br>
            </div>
        </div>
        `;
    }

    this.obtenerTodos = function () {

        var cadena = '';

        if (arregloComponentes.length > 0)
            arregloComponentes.forEach(function (componente, index) {
                cadena = cadena + obtenerCadenaHTML(componente, index);
            });
        else
            cadena = '<h5>No hay componentes registrados.</h5>';

        return cadena;
    }

    function obtenerValorComponente(tipo, componente) {

        var valor = '';

        switch (tipo) {
            case 'nombre':
                valor = componente.Nombre;
                break;
            case 'marca':
                valor = componente.Marca;
                break;
            case 'serie':
                valor = componente.Serie;
                break;
            case 'precio':
                valor = componente.Precio;
                break;
            default:
                break;
        }

        return valor;
    }

    this.obtenerPorFiltro = function (tipo, valorFiltro) {
        var coincidencias = 0;
        var cadena = '';

        arregloComponentes.forEach(function (componente, index) {
            if (obtenerValorComponente(tipo, componente).toLowerCase() === valorFiltro.toLowerCase()) {
                cadena = cadena + obtenerCadenaHTML(componente, index);
                coincidencias++;
            }
        });

        if (coincidencias === 0)
            cadena = '<h5>No se encontraron coincidencias</h5>';

        return cadena;
    }

    this.eliminarObjeto = function (pos) {
        var nuevoTam = arregloComponentes.length - 1;

        for (var i = pos; i < nuevoTam; i++)
            arregloComponentes[i] = arregloComponentes[Number(i) + Number(1)];

        arregloComponentes.length = nuevoTam;
        posicion = arregloComponentes.length;
    }

}

