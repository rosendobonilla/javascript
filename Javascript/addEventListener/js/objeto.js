/* Función como clase/objeto */

function Perro() {
    //var apodo = "Rocky", color = "Negro", raza = "Bulldog inglés";

    this.Apodo = "Rocky";
    this.Color = "negro";
    this.Raza = "bulldog inglés";

    this.Ladrar = function () {
        return "Guau Guau Guau";
    }

/*     this.getApodo = function () {
        return apodo;
    }  */ 

    this.getDatos = function() {
        return `${this.Apodo} es de color ${this.Color} y es un ${this.Raza}`;
    }
}