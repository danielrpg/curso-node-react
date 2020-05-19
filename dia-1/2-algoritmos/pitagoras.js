// . Utilizando el teorema de Pitágoras, 
// calcular la hipotenusa de un triángulo rectángulo

function calcHipotenusa(a, b) {
    let cat1 = Math.pow(a, 2);
    let cat2 = Math.pow(b, 2);
    return Math.sqrt( cat1 + cat2 );
}

let result = calcHipotenusa(2, 2);
console.log(`La hipotenusa es: ${result}`);