require('dotenv').config();

const args = require('./src/config/yargs');
const network = require('./src/network');
const location = require('./src/location');
const weather = require('./src/weather');

const printResult = (ip, location, currentWeather) => {
    console.log(`Your public IP address is: ${ip}`);
    console.log(`You location is ${location.city}, ${location.region_name}. ${location.country_name}`);
    console.log(`The current tempeture is ${currentWeather.temp}°`);
};

const main = async () => {
    const myPublicIPAddress = await network.getMyPublicIPAddress();
    const myLocation = await location.getLocationByIPAddress(myPublicIPAddress);
    const currentWeather = await weather.getWeatherByCoord(myLocation.latitude, myLocation.longitude);

    printResult(myPublicIPAddress, myLocation, currentWeather);
};

main();
