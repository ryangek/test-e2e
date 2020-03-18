exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // add more browsers to this array for more parallel tests!!
  multiCapabilities: [
    {
      browserName: 'firefox',
      platform: 'WIN10',
      version: '62.0'
    }
  ],

  //Add test scripts in this array to execute in parallel
  specs: ['tests/spec.js']
};
