const axios = require('axios');

let apiKey = 'AIzaSyBs8JL5maVQCg8PM80nVrhCNsy_VupaW2g';

const getLatAndLong = async(direccion) => {
    let encodedDireccion = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedDireccion}&key=${apiKey}`)
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw 'No hay resultados';
    } 
    let address = respuesta.data.results[0].formatted_address
    let location = respuesta.data.results[0].geometry.location;
    return await{
        address,
        lng: location.lng,
        lat: location.lat
    }
}

module.exports = {
    getLatAndLong
}