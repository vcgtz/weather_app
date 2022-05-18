const axios = require('axios').default;

const getWeatherByCoord = async (lat, lon) => {
  try {
    const response = await axios.get(`${process.env.OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`);

    if (response.status !== 200) {
      throw new Error(`Status Code: ${response.status}. ${response.statusText}`);
    }

    return response.data.main;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getWeatherByCoord,
};
