let book = {
    title: 'Curso de Javascript',
    author: 'Juan Perez',
    createdAt: new Date(),
    pages: 1000
}

for( let prop in book) {
    console.log(book[prop]);
}

let pets = ['Bobby', 'Cooper', 'Tomas', 'Gato'];

for(let pet of pets) {
    console.log(pet);
}