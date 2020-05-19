let miArreglo = [ 1, 2, 3, 4 ];

// console.log(miArreglo[0]); // 1
// for
console.time()
let total = miArreglo.length;
for (let i = 0; i < total; i++) {
    console.log(miArreglo[i]);
}
console.timeEnd()

// foreach
console.time()
miArreglo.forEach(function (elemento, index) {
    console.log(elemento);
});
console.timeEnd()
