exports.config = {
  seleniumAddress: 'http://133b0901b280:4445/wd/hub',

  // add more browsers to this array for more parallel tests!!
  multiCapabilities: [
    {
      browserName: 'chrome',
      version: '40.0.2214.411'
    }
  ],

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
