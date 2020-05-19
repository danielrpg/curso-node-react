// Mostrar la serie de fibonacci el numero de veces que indique el usuario

function fibonacci(num) {
    // devolver el resultado
let numeros = [0, 1];

for(let i = 2; i < num; i++) {
    numeros[i] = numeros[ i - 2] + numeros[ i - 1 ];
}

return numeros;
}

let res = fibonacci(5);
console.log(res.join(' '));

// 0, 1, 1, 2, 3,.....