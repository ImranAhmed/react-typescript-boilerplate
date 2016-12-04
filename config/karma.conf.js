// Karma configuration
// Generated on Sat Dec 03 2016 15:19:21 GMT+0000 (GMT Standard Time)

const webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],


    // list of files / patterns to load in the browser
    files: [
      { pattern: "../app/**/*spec.tsx" }
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "../app/**/*.spec.ts*": ["webpack"]
    },

    // list of files to exclude
    exclude: [
    ],

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["html", "mocha"],

    htmlReporter: {
      outputFile: "../test_results/units.html",

      // Optional 
      pageTitle: "App",
      subPageTitle: "Unit Test Suite",
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],

    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-phantomjs-launcher"),
      require("karma-htmlfile-reporter"),
      require("karma-mocha-reporter")
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
