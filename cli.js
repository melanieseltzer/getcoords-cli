#!/usr/bin/env node

require('@babel/polyfill');
const chalk = require('chalk');
const meow = require('meow');
const getCoords = require('getcoords');

const cli = meow(`
	Usage
	  $ getcoords "[address]"

	Options
	  --version Outputs the version

	Examples
	  $ getcoords "Los Angeles, CA"
	  34.0522342 -118.2436849
	  $ getcoords "6801 Hollywood Blvd, Los Angeles, CA 90028"
	  34.1022444 -118.3401679
`);

// Capture the user input
const { input } = cli;

(async () => {
  try {
    // Get the coordinates from the resolved request
    // using the input address
    const coords = await getCoords(input[0]);
    const { lat, lng } = coords;
    console.log(chalk.green(lat, lng));
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
})();
