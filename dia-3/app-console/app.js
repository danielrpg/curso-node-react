const argv = require('./config/yargs').argv;
const colors = require("colors");

const { listTable, createFile } = require('./multiply/multiply');

let command = argv._[0];

switch(command) {
    case "list":
        listTable(argv.base, argv.limit);
        break;
    case "create":
        createFile(argv.base, argv.limit)
            .then(file => console.log(`Archivo Creado: ${colors.green(file)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('no se encuentra el comando');
}