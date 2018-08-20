const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
            alias: 'd',
            demand: true,
            desc: 'Nombre de la ciudad o lugar del que se quiere ver el tiempo'
    }
}).argv

console.log(argv.direccion);

const getTempFromCityName = async(direccion) => {
    let lugarJSON = await lugar.getLatAndLong(direccion);
    let climaJSON = await clima.getClima(lugarJSON.lat, lugarJSON.lng);
    return await {
        city: lugarJSON.address,
        temp: climaJSON
    }
}

getTempFromCityName(argv.direccion).then((resp => {
    console.log(`En ${resp.city} hace ${resp.temp} grados.`);
})).catch((err) => {
    console.log(err);
})
