const colors = require('colors');

const printResults = (ip, location, weather) => {
  console.log(`Your public IP address is: ${getIPFormatted(ip)}`);
  console.log(`Your location is: ${getLocationFormatted(location)}`);
  console.log(`Current tempeture is: ${getTempFormatted(weather)}`);
};

const getIPFormatted = (ip) => colors.bold.green(ip);

const getTempFormatted = (weather) => `${colors.bold.yellow(weather.temp)}°`;

const getLocationFormatted = (location) => {
  return colors.bold.cyan(`${location.city}, ${location.region_name}. ${location.country_name}`);
}

module.exports = {
    printResults,
};
