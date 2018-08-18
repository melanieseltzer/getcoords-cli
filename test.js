import test from 'ava';
import execa from 'execa';

const sandbox = require('sinon').createSandbox();

test('shell command fails if api key not set', async t => {
  // Force the command failure by stubbing GOOGLE_GEOCOORDS_API_KEY
  sandbox.stub(process, 'env').value({ GOOGLE_GEOCOORDS_API_KEY: '' });

  try {
    await execa.shell('node ./cli.js "Los Angeles 90034"');
  } catch (error) {
    t.is(error.failed, true);
    t.is(error.stdout, 'Error: Cannot find Google api key.\n');
  }
});

test('shell command fails if no address input', async t => {
  // Force the command failure by stubbing GOOGLE_GEOCOORDS_API_KEY
  sandbox.stub(process, 'env').value({ GOOGLE_GEOCOORDS_API_KEY: '1234' });

  try {
    await execa.shell('node ./cli.js');
  } catch (error) {
    t.is(error.failed, true);
    t.is(error.stdout, 'Error: Please enter an address.\n');
  }
});

test.afterEach(() => {
  // Make sure to restore the env variable after all tests
  sandbox.restore();
});
