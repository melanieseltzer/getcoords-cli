# 🌐 getcoords-cli [![npm](https://img.shields.io/badge/npm-v1.0.7-blue.svg)](https://www.npmjs.com/package/getcoords-cli) [![Build Status](https://travis-ci.org/melanieseltzer/getcoords-cli.svg?branch=master)](https://travis-ci.org/melanieseltzer/getcoords-cli) [![Known Vulnerabilities](https://snyk.io/test/github/melanieseltzer/getcoords-cli/badge.svg)](https://snyk.io/test/github/melanieseltzer/getcoords-cli)

> Get lat and long coordinates from any address, in your terminal

`getcoords-cli` uses the Google Geocoding API to convert any address into geographic coordinates.

## Install

```
$ npm install -g getcoords-cli
```

## Local Installation

`getcoords-cli` is intended to be installed globally and run anywhere, but you can also install it locally in a project. Note that if you do this, you will only be able to run commands inside your local project directory.

With [npx](https://www.npmjs.com/package/npx):

```
$ cd path/to/your/project
$ npm install getcoords-cli
$ npx getcoords "..."
```

Or, with npm scripts:

```
$ cd path/to/your/project
$ npm install getcoords-cli
```

```
// in package.json
"scripts": {
  "getcoords": "./node_modules/.bin/getcoords"
}
```

```
$ npm run getcoords "..."
```

## API Key

In order to use the package globally, you must first obtain a Google API key and set `process.env.GOOGLE_GEOCOORDS_API_KEY` in your shell initialization file. Please visit the [dev docs](https://developers.google.com/maps/documentation/geocoding/start#get-a-key) for instruction on how to obtain the key, and this [Stack Exchange answer](https://unix.stackexchange.com/a/21600) for instruction on how to add it to your shell.

## Usage

```
$ getcoords --help

  Usage
    getcoords [address]

  Options
    --version Outputs the version

  Examples
    $ getcoords "Los Angeles, CA"
    34.0522342 -118.2436849

    $ getcoords "6801 Hollywood Blvd, Los Angeles, CA 90028"
    34.1022444 -118.3401679
```

## Related

- [getcoords](https://github.com/melanieseltzer/getcoords)

## License

MIT © [Melanie Seltzer](https://github.com/melanieseltzer)
