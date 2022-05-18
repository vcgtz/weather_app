require('dotenv').config();
const args = require('./src/config/yargs');
const network = require('./src/network');
const location = require('./src/location');

const main = async () => {
    const myPublicIPAddress = await network.getMyPublicIPAddress();
    const myLocation = await location.getLocationByIPAddress(myPublicIPAddress);

    console.log(myLocation);
};

main();
