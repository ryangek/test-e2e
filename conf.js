exports.config = {
  seleniumAddress: 'http://133b0901b280:4445/wd/hub',

  // add more browsers to this array for more parallel tests!!
  multiCapabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        binary: 'node_modules/protractor/node_modules/selenium/chromedriver_80.0.3987.106.exe',
        args: ['--start-maximized', 'disable-infobars']
      }
    }
  ],

  chromeDriver: 'node_modules/protractor/node_modules/selenium/chromedriver_80.0.3987.106',

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
