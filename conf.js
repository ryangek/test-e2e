exports.config = {
  // seleniumAddress: 'http://133b0901b280:4445/wd/hub',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // add more browsers to this array for more parallel tests!!
  multiCapabilities: [
    {
      browserName: 'chrome',
      seleniumAddress: 'http://localhost:4444/wd/hub'
    }
  ],

  chromeDriver:
    'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_80.0.3987.106',

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
