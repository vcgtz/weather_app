const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

module.exports = yargs(hideBin(process.argv))
  .option('location', {
    alias: 'l',
    type: 'string',
    description: 'Your location',
    default: 'current'
  })
  .help()
  .argv;
