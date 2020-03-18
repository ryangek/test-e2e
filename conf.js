exports.config = {
  // add more browsers to this array for more parallel tests!!
  multiCapabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        binary: './chromedriver.exe',
        args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
      }
    }
  ],

  chromeDriver: './chromedriver',

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
