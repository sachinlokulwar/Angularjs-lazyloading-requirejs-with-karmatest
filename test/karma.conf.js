// Karma configuration
// Generated on 2016-12-06

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine', 
      'requirejs'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/requirejs/require.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
     
      {pattern: 'app/scripts/*.js', included: false},
      {pattern: 'app/scripts/**/*.js', included: false},
      {pattern: 'test/spec/lazyMock.js', included: false},
      {pattern: 'test/spec/**/*.js', included: false},
      'app/scripts/main.js',
      /*'app/scripts/routeResolver.js',*/
      'test/test-main.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
   browsers: [
      "Chrome"
    ],
    // Code coverage report
    reporters: ['progress', 'coverage'],

    // Which plugins to enable
    coverageReporter: {  
      type: 'html',
      dir: 'coverage'
    },


    preprocessors: {  
      'app/scripts/**/*.js': ['coverage']
    },
    

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    plugins: [
      "karma-requirejs",
      "karma-chrome-launcher",
      "karma-jasmine",
      'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    browserConsoleLogOptions : {level: "debug", format: "%b %T: %m", terminal: true}

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
