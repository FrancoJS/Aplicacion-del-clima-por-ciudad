const axios = require("axios");

const getClima = async (lat, long) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dbf199cbf4cf2e91532d02dbf59e965d&units=metric&`;

  const resp = await axios.get(url);

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
