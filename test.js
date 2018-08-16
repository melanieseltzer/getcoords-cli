import test from 'ava';
import execa from 'execa';

const sandbox = require('sinon').createSandbox();

test('shell command fails if api key not set', async t => {
  // Force the command failure by stubbing GOOGLE_GEOCOORDS_API_KEY
  sandbox.stub(process, 'env').value({ GOOGLE_GEOCOORDS_API_KEY: '' });

  try {
    await execa.shell('node ./lib/cli.js "Los Angeles 90034"');
  } catch (error) {
    t.is(error.failed, true);
    t.is(error.stdout, 'Cannot find Google api key.\n');
  }
});

test('shell command fails if no address input', async t => {
  // Force the command failure by stubbing GOOGLE_GEOCOORDS_API_KEY
  sandbox.stub(process, 'env').value({ GOOGLE_GEOCOORDS_API_KEY: '1234' });

  try {
    await execa.shell('node ./lib/cli.js');
  } catch (error) {
    t.is(error.failed, true);
    t.is(error.stdout, 'Please enter an address.\n');
  }
});

test.afterEach(() => {
  // Make sure to restore the env variable after all tests
  sandbox.restore();
});
