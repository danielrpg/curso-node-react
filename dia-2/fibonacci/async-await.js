const colors = require('colors');

let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Christian');
        }, 3000);
    });
}

let saludar = async () => {
    let name = await getName();
    return `Hola ${name}`;
}


saludar().then(mensaje => {
    console.log(mensaje);
})
.catch(error => console.log(error));