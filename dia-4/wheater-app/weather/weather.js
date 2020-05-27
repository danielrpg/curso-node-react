const axios = require('axios');

const getWeather = async (address) => {
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=0c9aa86792cf38c3d71282e3465fbd90`)
    return res.data.main.temp;
}

module.exports = {
    getWeather
}