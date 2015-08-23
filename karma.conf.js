var istanbul = require('browserify-istanbul');

module.exports = function (config) {

  var root = process.cwd();
  var sources = root + '/src/**/*.js';
  var tests = root + '/test/**/*.spec.js';
  var coverage = root + '/coverage';
  var preprocessors = {};

  preprocessors[sources] = ['browserify', 'coverage'];
  preprocessors[tests] = ['browserify'];

  config.set({
    plugins: [
      require('karma-mocha'),
      require('karma-sinon-chai'),
      require('karma-browserify'),
      require('karma-mocha-reporter'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher')
    ],
    frameworks: ['mocha', 'sinon-chai', 'browserify'],
    files: [
      tests
    ],
    browserify: {
      debug: true,
      transform: [
        istanbul()
      ]
    },
    preprocessors: preprocessors,
    reporters: ['mocha', 'coverage'],
    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: coverage,
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.xml'},
        {type: 'lcov', subdir: 'lcov'}
      ]
    }
  });
};
