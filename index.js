require('dotenv').config();
const args = require('./src/config/yargs');
const network = require('./src/network');

const main = async () => {
    const myPublicIPAddress = await network.getMyPublicIPAddress();
    console.log(myPublicIPAddress);
};

main();
