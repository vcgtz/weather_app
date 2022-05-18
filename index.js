require('dotenv').config();

const args = require('./src/config/yargs');
const network = require('./src/network');
const location = require('./src/location');
const weather = require('./src/weather');
const results = require('./src/results');

const main = async () => {
    const myPublicIPAddress = await network.getMyPublicIPAddress();
    const myLocation = await location.getLocationByIPAddress(myPublicIPAddress);
    const currentWeather = await weather.getWeatherByCoord(myLocation.latitude, myLocation.longitude);

    results.printResults(myPublicIPAddress, myLocation, currentWeather);
};

main();
