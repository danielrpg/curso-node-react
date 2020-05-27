const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'nombre de una ciudad',
        demand: true
    }
}).argv;

const weather = require('./weather/weather');

let getInfo = async (address) => {
    try {
        let temp = await weather.getWeather(address);
        return `La temperatura en ${address} es ${temp}`;
    } catch(e) {
        return `No es posible determinar la temperatura en ${address}`;
    }
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err));
