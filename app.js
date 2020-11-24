const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").option({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    let lat = coords.lat;
    let long = coords.long;
    const temp = await clima.getClima(lat, long);
    return `El clima de ${direccion} es de ${temp} grados Celcius`;
  } catch (err) {
    return `No se pudo derterminar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
