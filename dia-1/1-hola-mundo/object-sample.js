let persona = {
    nombre: "Christian",
    edad: 29,
    direccion: "Av centenario.",
    telefonos: [ 12354124, 2222222, 78000000],
    apellidos: {
        apellidoPaterno: 'perez',
        apellidoMaterno: 'rojas'
    }
}
console.log(persona); // imprime la referencia del objeto

console.log(persona.edad);