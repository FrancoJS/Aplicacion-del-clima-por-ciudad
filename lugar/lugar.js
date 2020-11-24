const axios = require("axios");

const getLugarLatLng = async (direccion) => {
  let encodeURL = encodeURI(direccion);
  //console.log(encodeURL);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&appid=dbf199cbf4cf2e91532d02dbf59e965d`;

  const resp = await axios.get(url);

  if (resp.data.cod == "400" || resp.data.cod == "404") {
    throw new Error("La direccion ingresada no es valida");
  }

  const data = resp.data;
  const direction = data.name;
  const lat = data.coord.lat;
  const long = data.coord.lon;

  return {
    direction,
    lat,
    long,
  };
};

module.exports = {
  getLugarLatLng,
};
