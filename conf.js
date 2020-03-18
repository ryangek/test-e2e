exports.config = {
  // add more browsers to this array for more parallel tests!!
  capabilities: {
    browserName: 'firefox',
    marionette: true,
    firefoxOptions: {
      args: ['--headless']
    },
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  },
  geckoDriver: './geckodriver.exe',
  directConnect: true,

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
