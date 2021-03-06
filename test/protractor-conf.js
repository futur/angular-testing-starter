exports.config = {
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  // location of E2E test specs
  specs: [
    '../test/e2e/*.js'
  ],
  
  // configure multiple browsers to run tests
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'safari'
  // }],

  // or configure a single browser
  
  capabilities: {
    'browserName': 'phantomjs',

  /* 
   * Can be used to specify the phantomjs binary path.
   * This can generally be ommitted if you installed phantomjs globally.
   */

  /*
   * Command line args to pass to ghostdriver, phantomjs's browser driver.
   * See https://github.com/detro/ghostdriver#faq
   */
  'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  

  // url where your app is running, relative URLs are prepending with this URL
  baseUrl: 'http://localhost:9000/',

  // testing framework, jasmine is the default
  framework: 'jasmine'
};
