const axios = require('axios');

const apiKey = 'bc1725396bbb38d25481b24c72a9417b';
const units = 'metric';
const getClima = async(lat, long) => {
    //axios
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`)
    if (resp.data.cod !== 200) {
        throw 'Error recuperando temperatura'
    } else {
        return await resp.data.main.temp;
    }
}

module.exports = {
    getClima
}