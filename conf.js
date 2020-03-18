exports.config = {
  seleniumAddress: 'http://133b0901b280:4445/wd/hub',

  // add more browsers to this array for more parallel tests!!
  multiCapabilities: [
    {
      browserName: 'chrome'
    }
  ],

  chromeDriver: '$JENKINS_HOME/tools/chromedriver/chromedrive.exe',

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
