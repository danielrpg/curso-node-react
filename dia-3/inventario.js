function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = {};

    this.add = function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    }

    this.borrar = function (nombre) {
        delete this.articulos[nombre];
    }

    this.cantidad = function(nombre) {
        return this.articulos[nombre];
    }

    this.getNombre = function() {
        return this.nombre;
    }

}

var libros = new Inventario("Biblioteca");
libros.add("Javascript", 3);
libros.add("Nodejs", 10);

console.log(libros.cantidad("Javascript"));