// utilizando el teorema de pitagoras calcular la hipotenusa

// function hipotenusa(a, b) {
//     function cuadrado(x) {
//         return x*x; // Math.pow(x, 2);
//     }

//     return Math.sqrt(cuadrado(a) + cuadrado(b));
// }


let hipotenusa = (a, b) => {
    let cuadrado = (x) => x*x;
    return Math.sqrt(cuadrado(a) + cuadrado(b));
}

console.log(hipotenusa(3, 4)); // 5
