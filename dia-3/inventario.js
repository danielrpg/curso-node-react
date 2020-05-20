function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = {};
}
Inventario.prototype = {
    add : function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    },
    borrar: function (nombre) {
        delete this.articulos[nombre];
    },
    cantidad: function(nombre) {
        return this.articulos[nombre];
    },
    getNombre: function() {
        return this.nombre;
    }
}


var libros = new Inventario("Biblioteca");
libros.add("Javascript", 3);
libros.add("Nodejs", 10);

console.log(libros.cantidad("Javascript"));