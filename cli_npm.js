#!/usr/bin/env node
require('@babel/polyfill');
const chalk = require('chalk');
const meow = require('meow');
const getCoords = require('getcoords');

const cli = meow(`
	Usage
	  $ npm run getcoords "[address]"

	Options
	  --version Outputs the version

	Examples
	  $ npm run getcoords "Los Angeles, CA"
	  34.0522342 -118.2436849
	  $ npm run getcoords "6801 Hollywood Blvd, Los Angeles, CA 90028"
	  34.1022444 -118.3401679
`);

const { input } = cli;

if (!process.env.GOOGLE_GEOCOORDS_API_KEY) {
  console.log(chalk.red('Cannot find Google api key.'));
} else if (input.length === 0) {
  console.log(chalk.red('Please enter an address.'));
} else {
  (async () => {
    try {
      // Get the coordinates from the resolved request
      // using the inputted address
      const coords = await getCoords(input[0]);
      const { lat, lng } = coords;
      console.log(chalk.green(lat, lng));
    } catch (error) {
      // Handle errors other than no key/address
      console.error(chalk.red('Oops! Something went wrong.'));
    }
  })();
}
